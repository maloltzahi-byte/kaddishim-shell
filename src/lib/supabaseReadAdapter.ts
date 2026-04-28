import { callsData, kaddishRequestsData, membersData, volunteersData } from '../data'
import { supabase, isSupabaseConfigured } from './supabaseClient'
import { mapCallRowToRecord, mapKaddishRequestRowToRecord, mapMemberRowToRecord, mapVolunteerRowToRecord } from './supabaseMappers'
import type { SupabaseCallRow, SupabaseKaddishRequestRow, SupabaseMemberRow, SupabaseVolunteerRow } from '../types/supabase'

export const supabaseReadAdapter = {
  calls: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return callsData
      const { data, error } = await supabase.from('calls').select('*')
      if (error || !data || data.length === 0) return callsData
      return (data as SupabaseCallRow[]).map(mapCallRowToRecord)
    },
    async findById(id: string) {
      const fallback = callsData.find(item => item.callId === id)
      if (!isSupabaseConfigured || !supabase) return fallback
      const { data, error } = await supabase.from('calls').select('*').eq('call_id', id).maybeSingle()
      if (error || !data) return fallback
      return mapCallRowToRecord(data as SupabaseCallRow)
    }
  },
  kaddishRequests: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return kaddishRequestsData
      const { data, error } = await supabase.from('kaddish_requests').select('*')
      if (error || !data || data.length === 0) return kaddishRequestsData
      return (data as SupabaseKaddishRequestRow[]).map(mapKaddishRequestRowToRecord)
    },
    async findById(id: string) {
      const fallback = kaddishRequestsData.find(item => item.requestId === id)
      if (!isSupabaseConfigured || !supabase) return fallback
      const { data, error } = await supabase.from('kaddish_requests').select('*').eq('request_id', id).maybeSingle()
      if (error || !data) return fallback
      return mapKaddishRequestRowToRecord(data as SupabaseKaddishRequestRow)
    }
  },
  volunteers: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return volunteersData
      const { data, error } = await supabase.from('volunteers').select('*')
      if (error || !data || data.length === 0) return volunteersData
      return (data as SupabaseVolunteerRow[]).map(mapVolunteerRowToRecord)
    },
    async findById(id: string) {
      const fallback = volunteersData.find(item => item.volunteerId === id)
      if (!isSupabaseConfigured || !supabase) return fallback
      const { data, error } = await supabase.from('volunteers').select('*').eq('volunteer_id', id).maybeSingle()
      if (error || !data) return fallback
      return mapVolunteerRowToRecord(data as SupabaseVolunteerRow)
    }
  },
  members: {
    async list() {
      if (!isSupabaseConfigured || !supabase) return membersData
      const { data, error } = await supabase.from('members').select('*')
      if (error || !data || data.length === 0) return membersData
      return (data as SupabaseMemberRow[]).map(mapMemberRowToRecord)
    },
    async findById(id: string) {
      const fallback = membersData.find(item => item.memberId === id)
      if (!isSupabaseConfigured || !supabase) return fallback
      const { data, error } = await supabase.from('members').select('*').eq('member_id', id).maybeSingle()
      if (error || !data) return fallback
      return mapMemberRowToRecord(data as SupabaseMemberRow)
    }
  }
}
