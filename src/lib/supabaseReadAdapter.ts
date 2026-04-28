import { callsData, kaddishRequestsData, membersData, volunteersData } from '../data'
import { supabase, isSupabaseConfigured } from './supabaseClient'
import { mapCallRowToRecord, mapKaddishRequestRowToRecord, mapMemberRowToRecord, mapVolunteerRowToRecord } from './supabaseMappers'
import type { SupabaseCallRow, SupabaseKaddishRequestRow, SupabaseMemberRow, SupabaseVolunteerRow } from '../types/supabase'

export const supabaseReadAdapter = {
  calls: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return callsData
      const { data, error } = await supabase.from('calls').select('*')
      if (error || !data) return callsData
      return (data as SupabaseCallRow[]).map(mapCallRowToRecord)
    }
  },
  kaddishRequests: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return kaddishRequestsData
      const { data, error } = await supabase.from('kaddish_requests').select('*')
      if (error || !data) return kaddishRequestsData
      return (data as SupabaseKaddishRequestRow[]).map(mapKaddishRequestRowToRecord)
    }
  },
  volunteers: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return volunteersData
      const { data, error } = await supabase.from('volunteers').select('*')
      if (error || !data) return volunteersData
      return (data as SupabaseVolunteerRow[]).map(mapVolunteerRowToRecord)
    }
  },
  members: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return membersData
      const { data, error } = await supabase.from('members').select('*')
      if (error || !data) return membersData
      return (data as SupabaseMemberRow[]).map(mapMemberRowToRecord)
    }
  }
}
