import * as Gitbeaker from '@gitbeaker/core';
import { modifyServices } from '@gitbeaker/requester-utils';
import { Requester } from './KyRequester';

const APIServices = modifyServices(Gitbeaker, [{ requester: Requester }]);

export const {
  // Groups
  Groups,
  GroupAccessRequests,
  GroupBadges,
  GroupCustomAttributes,
  GroupIssueBoards,
  GroupMembers,
  GroupMilestones,
  GroupProjects,
  GroupVariables,
  GroupLabels,
  Epics,
  EpicIssues,
  EpicNotes,
  EpicDiscussions,

  // Users
  Users,
  UserCustomAttributes,
  UserEmails,
  UserImpersonationTokens,
  UserKeys,
  UserGPGKeys,

  // Projects
  Branches,
  Commits,
  CommitDiscussions,
  ContainerRegistry,
  Deployments,
  DeployKeys,
  Environments,
  Issues,
  IssuesStatistics,
  IssueNotes,
  IssueDiscussions,
  IssueAwardEmojis,
  Jobs,
  Labels,
  MergeRequests,
  MergeRequestAwardEmojis,
  MergeRequestDiscussions,
  MergeRequestNotes,
  Packages,
  Pipelines,
  PipelineSchedules,
  PipelineScheduleVariables,
  Projects,
  ProjectAccessRequests,
  ProjectBadges,
  ProjectCustomAttributes,
  ProjectImportExport,
  ProjectIssueBoards,
  ProjectHooks,
  ProjectMembers,
  ProjectMilestones,
  ProjectSnippets,
  ProjectSnippetNotes,
  ProjectSnippetDiscussions,
  ProjectSnippetAwardEmojis,
  ProtectedBranches,
  ProtectedTags,
  ProjectVariables,
  PushRules,
  Releases,
  ReleaseLinks,
  Repositories,
  RepositoryFiles,
  Runners,
  Services,
  Tags,
  Todos,
  Triggers,
  VulnerabilityFindings,

  // Genral
  ApplicationSettings,
  BroadcastMessages,
  Events,
  FeatureFlags,
  GeoNodes,
  GitignoreTemplates,
  GitLabCIYMLTemplates,
  Keys,
  License,
  LicenceTemplates,
  Lint,
  Namespaces,
  NotificationSettings,
  Markdown,
  PagesDomains,
  Search,
  SidekiqMetrics,
  Snippets,
  SystemHooks,
  Version,
  Wikis,

  // Bundles
  GroupsBundle,
  UsersBundle,
  ProjectsBundle,
  Gitlab,
} = APIServices;
