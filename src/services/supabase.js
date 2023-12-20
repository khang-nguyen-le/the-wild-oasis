import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://luhdilitnzxwvznynqlq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1aGRpbGl0bnp4d3Z6bnlucWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxOTU5MjYsImV4cCI6MjAxNzc3MTkyNn0.G9FmcgTBmajfme2QIVOupFLC7ARvV18yp2AQlb4bzW8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
