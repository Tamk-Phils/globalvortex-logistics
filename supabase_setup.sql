-- 1. Create the shipments table if it doesn't exist
CREATE TABLE IF NOT EXISTS shipments (
    tracking_number TEXT PRIMARY KEY,
    sender_name TEXT,
    sender_email TEXT,
    sender_phone TEXT,
    sender_address TEXT,
    recipient_name TEXT,
    recipient_email TEXT,
    recipient_phone TEXT,
    recipient_address TEXT,
    item_type TEXT,
    description TEXT,
    weight DECIMAL,
    dimensions TEXT,
    origin TEXT,
    destination TEXT,
    courier TEXT,
    packages TEXT,
    mode TEXT,
    product TEXT,
    quantity INTEGER,
    total_freight DECIMAL,
    carrier TEXT,
    carrier_reference TEXT,
    pickup_date DATE,
    pickup_time TIME,
    expected_delivery TIMESTAMPTZ,
    comments TEXT,
    current_status TEXT DEFAULT 'Pending',
    payment_method TEXT DEFAULT 'Bank Transfer',
    payment_status TEXT DEFAULT 'Pending',
    is_deleted BOOLEAN DEFAULT FALSE,
    latitude DECIMAL,
    longitude DECIMAL,
    estimated_delivery TIMESTAMPTZ,
    updates JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 1.5 Add new columns if the table already existed
DO $$
BEGIN
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS sender_phone TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS sender_address TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS origin TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS destination TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS courier TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS packages TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS mode TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS product TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS quantity INTEGER;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS total_freight DECIMAL;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS carrier TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS carrier_reference TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS pickup_date DATE;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS pickup_time TIME;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS expected_delivery TIMESTAMPTZ;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
    BEGIN
        ALTER TABLE shipments ADD COLUMN IF NOT EXISTS comments TEXT;
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
END $$;

-- 2. Enable Row Level Security
ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy to allow anyone to READ shipments (for tracking)
DROP POLICY IF EXISTS "Allow public read access" ON shipments;
CREATE POLICY "Allow public read access" ON shipments
    FOR SELECT
    TO anon
    USING (true);

-- 4. Create a policy to allow anonymous INSERTS (for this demo/app)
DROP POLICY IF EXISTS "Allow public insert access" ON shipments;
CREATE POLICY "Allow public insert access" ON shipments
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- 5. Create a policy to allow anyone to UPDATE shipments (for the dashboard)
DROP POLICY IF EXISTS "Allow public update access" ON shipments;
CREATE POLICY "Allow public update access" ON shipments
    FOR UPDATE
    TO anon
    USING (true)
    WITH CHECK (true);

-- 6. Create shipment_logs table for activity tracking
CREATE TABLE IF NOT EXISTS shipment_logs (
    id TEXT PRIMARY KEY,
    shipment_id TEXT REFERENCES shipments(tracking_number) ON DELETE CASCADE,
    status TEXT,
    location TEXT,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Enable Row Level Security for shipment_logs
ALTER TABLE shipment_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read logs" ON shipment_logs;
CREATE POLICY "Allow public read logs" ON shipment_logs
    FOR SELECT
    TO anon
    USING (true);
DROP POLICY IF EXISTS "Allow public insert logs" ON shipment_logs;
CREATE POLICY "Allow public insert logs" ON shipment_logs
    FOR INSERT
    TO anon
    WITH CHECK (true);
DROP POLICY IF EXISTS "Allow public delete logs" ON shipment_logs;
CREATE POLICY "Allow public delete logs" ON shipment_logs
    FOR DELETE
    TO anon
    USING (true);
