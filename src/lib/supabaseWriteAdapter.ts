import type {
  CallRecord,
  CreateCallPayload,
  CreateKaddishRequestPayload,
  CreateMemberPayload,
  CreateVolunteerPayload,
  DonationInterestPayload,
  KaddishRequestRecord,
  MemberRecord,
  PublicKaddishRequestPayload,
  PublicMinyanRequestPayload,
  PublicVolunteerJoinPayload,
  VolunteerRecord,
  WriteResult
} from '../types/entities'

function forbiddenWrite<T>(): Promise<WriteResult<T>> {
  return Promise.resolve({
    ok: false,
    errors: [{ code: 'FORBIDDEN_OPERATION', message: 'Write operations are disabled until Sprint 30 approval.' }]
  })
}

export const supabaseWriteAdapter = {
  internal: {
    createCall(_payload: CreateCallPayload): Promise<WriteResult<CallRecord>> {
      return forbiddenWrite<CallRecord>()
    },
    createKaddishRequest(_payload: CreateKaddishRequestPayload): Promise<WriteResult<KaddishRequestRecord>> {
      return forbiddenWrite<KaddishRequestRecord>()
    },
    createVolunteer(_payload: CreateVolunteerPayload): Promise<WriteResult<VolunteerRecord>> {
      return forbiddenWrite<VolunteerRecord>()
    },
    createMember(_payload: CreateMemberPayload): Promise<WriteResult<MemberRecord>> {
      return forbiddenWrite<MemberRecord>()
    }
  },
  public: {
    submitKaddishRequest(_payload: PublicKaddishRequestPayload): Promise<WriteResult<KaddishRequestRecord>> {
      return forbiddenWrite<KaddishRequestRecord>()
    },
    submitMinyanRequest(_payload: PublicMinyanRequestPayload): Promise<WriteResult<CallRecord>> {
      return forbiddenWrite<CallRecord>()
    },
    submitVolunteerJoin(_payload: PublicVolunteerJoinPayload): Promise<WriteResult<VolunteerRecord>> {
      return forbiddenWrite<VolunteerRecord>()
    },
    submitDonationInterest(_payload: DonationInterestPayload): Promise<WriteResult<DonationInterestPayload>> {
      return forbiddenWrite<DonationInterestPayload>()
    }
  },
  future: {
    updateStatus(): Promise<WriteResult<never>> {
      return forbiddenWrite<never>()
    },
    addTimelineNote(): Promise<WriteResult<never>> {
      return forbiddenWrite<never>()
    },
    assignVolunteer(): Promise<WriteResult<never>> {
      return forbiddenWrite<never>()
    },
    closeRequestOrCall(): Promise<WriteResult<never>> {
      return forbiddenWrite<never>()
    }
  }
}

export type SupabaseWriteAdapter = typeof supabaseWriteAdapter
