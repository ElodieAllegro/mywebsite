/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text, required) - Name of the person contacting
      - `email` (text, required) - Email address of the person
      - `phone` (text, optional) - Phone number
      - `company` (text, optional) - Company name
      - `message` (text, required) - Message content
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anonymous users to insert contact submissions
    - No read/update/delete policies - only admin access through dashboard
    
  3. Important Notes
    - This table stores contact form submissions
    - Anonymous users can only submit (insert) new contacts
    - All submissions are timestamped for tracking
*/

/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text, required) - Name of the person contacting
      - `email` (text, required) - Email address of the person
      - `phone` (text, optional) - Phone number
      - `company` (text, optional) - Company name
      - `subject` (text, required) - Subject of the contact (devis, audit, autre)
      - `message` (text, required) - Message content
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anonymous users to insert contact submissions
    - No read/update/delete policies - only admin access through dashboard
    
  3. Important Notes
    - This table stores contact form submissions
    - Anonymous users can only submit (insert) new contacts
    - All submissions are timestamped for tracking
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  subject text DEFAULT 'devis' CHECK (subject IN ('devis', 'audit', 'autre')),
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);
