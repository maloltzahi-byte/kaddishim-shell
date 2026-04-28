import { callsData, kaddishRequestsData, membersData, publicHomeActions, publicHomeSections, reportsActivityByType, reportsCareStatus, reportsManagerAlerts, reportsStats, volunteersData } from '../data'

export const dataAdapter = {
  calls: {
    list: () => callsData,
    findById: (id: string) => callsData.find(item => item.callId === id)
  },
  kaddishRequests: {
    list: () => kaddishRequestsData,
    findById: (id: string) => kaddishRequestsData.find(item => item.requestId === id)
  },
  volunteers: {
    list: () => volunteersData,
    findById: (id: string) => volunteersData.find(item => item.volunteerId === id)
  },
  members: {
    list: () => membersData,
    findById: (id: string) => membersData.find(item => item.memberId === id)
  },
  reports: {
    stats: () => reportsStats,
    activityByType: () => reportsActivityByType,
    careStatus: () => reportsCareStatus,
    alerts: () => reportsManagerAlerts
  },
  public: {
    homeActions: () => publicHomeActions,
    homeSections: () => publicHomeSections
  }
} as const

export type DataAdapter = typeof dataAdapter
