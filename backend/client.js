import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://qsxiefmjzgwmrgwkpafw.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzeGllZm1qemd3bXJnd2twYWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMjA3OTQsImV4cCI6MjAxNTU5Njc5NH0.SiLAgC3xZYYFxXqJCOhwT7y-byMfYNaeqDIiiN0VsSE';

export const supabase = createClient(supabaseURL, supabaseApiKey)
