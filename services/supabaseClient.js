import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.evn.VITE_SUPABASE_URL;
const supabaseKey = import.meta.evn.VITE_SUPABASE_URL_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;