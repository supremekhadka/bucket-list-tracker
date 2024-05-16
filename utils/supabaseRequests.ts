import { supabaseClient } from "./supabaseClient";

export const getList = async (userId: string, token: string) => {
    const supabase = await supabaseClient(token);
    const { data: list } = await supabase
        .from("Bucket List")
        .select("*")
        .eq("user_id", userId)
    
    return list;
}