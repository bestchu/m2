
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum AccountAuthLogOrderField {
    aid = "aid",
    authType = "authType",
    createdAt = "createdAt",
    id = "id",
    ip = "ip",
    osArchitecture = "osArchitecture",
    osFamily = "osFamily",
    osVersion = "osVersion",
    platform = "platform",
    screen = "screen",
    version = "version"
}

export enum AccountLocalAuthOrderField {
    aid = "aid",
    createdAt = "createdAt",
    password = "password",
    updatedAt = "updatedAt"
}

export enum AccountOrderField {
    avatarUrl = "avatarUrl",
    city = "city",
    country = "country",
    createdAt = "createdAt",
    email = "email",
    gender = "gender",
    id = "id",
    language = "language",
    mobile = "mobile",
    nickName = "nickName",
    province = "province",
    updatedAt = "updatedAt",
    username = "username"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export class AccountAuthLogCreateInput {
    aid: string;
    authType: string;
    ip: string;
    osArchitecture: string;
    osFamily: string;
    osVersion: string;
    platform: string;
    screen?: string;
    version: string;
}

export class AccountAuthLogOrderByItem {
    field: AccountAuthLogOrderField;
    order: SortOrder;
}

export class AccountAuthLogUpdateDataInput {
    authType?: string;
    ip?: string;
    osArchitecture?: string;
    osFamily?: string;
    osVersion?: string;
    platform?: string;
    screen?: string;
    version?: string;
}

export class AccountAuthLogWhereInput {
    aid?: StringFilter;
    id?: StringFilter;
}

export class AccountAuthLogWhereUniqueInput {
    id: string;
}

export class AccountCreateInput {
    avatarUrl?: string;
    city?: string;
    country?: string;
    email?: string;
    gender?: number;
    language?: string;
    mobile?: string;
    nickName?: string;
    province?: string;
    username: string;
}

export class AccountLocalAuthCreateInput {
    aid: string;
    password: string;
}

export class AccountLocalAuthOrderByItem {
    field: AccountLocalAuthOrderField;
    order: SortOrder;
}

export class AccountLocalAuthUpdateDataInput {
    password?: string;
}

export class AccountLocalAuthWhereInput {
    aid?: StringFilter;
}

export class AccountLocalAuthWhereUniqueInput {
    aid: string;
}

export class AccountOrderByItem {
    field: AccountOrderField;
    order: SortOrder;
}

export class AccountUpdateDataInput {
    avatarUrl?: string;
    city?: string;
    country?: string;
    email?: string;
    gender?: number;
    language?: string;
    mobile?: string;
    nickName?: string;
    province?: string;
    username?: string;
}

export class AccountWhereInput {
    id?: StringFilter;
}

export class AccountWhereUniqueInput {
    id: string;
}

export class Credentials {
    captcha?: string;
    password: string;
    username: string;
}

export class NestedStringFilter {
    contains?: string;
    endsWith?: string;
    equals?: string;
    gt?: string;
    gte?: string;
    in?: string[];
    lt?: string;
    lte?: string;
    notIn?: string[];
    startsWith?: string;
}

export class StringFilter {
    contains?: string;
    endsWith?: string;
    equals?: string;
    gt?: string;
    gte?: string;
    in?: string[];
    lt?: string;
    lte?: string;
    not?: NestedStringFilter;
    notIn?: string[];
    startsWith?: string;
}

export class Account {
    authLogs: AccountAuthLog[];
    avatarUrl?: string;
    city?: string;
    country?: string;
    createdAt: DateTime;
    email?: string;
    gender?: number;
    id: string;
    language?: string;
    localAuth?: AccountLocalAuth;
    mobile?: string;
    nickName?: string;
    province?: string;
    updatedAt: DateTime;
    username: string;
}

export class AccountAuthLog {
    account: Account;
    aid: string;
    authType: string;
    createdAt: DateTime;
    id: string;
    ip: string;
    osArchitecture: string;
    osFamily: string;
    osVersion: string;
    platform: string;
    screen?: string;
    version: string;
}

export class AccountAuthLogEdge {
    cursor: string;
    node: AccountAuthLog;
}

export class AccountAuthLogPaginatedResponse {
    edges: AccountAuthLogEdge[];
    pageInfo: PageInfo;
    totalCount: number;
}

export class AccountLocalAuth {
    account: Account;
    aid: string;
    createdAt: DateTime;
    password: string;
    updatedAt: DateTime;
}

export class AccountLocalAuthEdge {
    cursor: string;
    node: AccountLocalAuth;
}

export class AccountLocalAuthPaginatedResponse {
    edges: AccountLocalAuthEdge[];
    pageInfo: PageInfo;
    totalCount: number;
}

export class AccountPaginated {
    authLogs: AccountAuthLogPaginatedResponse;
    avatarUrl?: string;
    city?: string;
    country?: string;
    createdAt: DateTime;
    email?: string;
    gender?: number;
    id: string;
    language?: string;
    localAuth?: AccountLocalAuth;
    mobile?: string;
    nickName?: string;
    province?: string;
    updatedAt: DateTime;
    username: string;
}

export class AccountPaginatedEdge {
    cursor: string;
    node: AccountPaginated;
}

export class AccountPaginatedResponse {
    edges: AccountPaginatedEdge[];
    pageInfo: PageInfo;
    totalCount: number;
}

export class Auth {
    accessToken: string;
    account: Account;
    refreshToken: string;
}

export abstract class IMutation {
    abstract createAccount(data: AccountCreateInput): Account | Promise<Account>;

    abstract createAccountAuthLog(data: AccountAuthLogCreateInput): AccountAuthLog | Promise<AccountAuthLog>;

    abstract createAccountLocalAuth(data: AccountLocalAuthCreateInput): AccountLocalAuth | Promise<AccountLocalAuth>;

    abstract deleteAccount(where: AccountWhereUniqueInput): Account | Promise<Account>;

    abstract deleteAccountAuthLog(where: AccountAuthLogWhereUniqueInput): AccountAuthLog | Promise<AccountAuthLog>;

    abstract deleteAccountLocalAuth(where: AccountLocalAuthWhereUniqueInput): AccountLocalAuth | Promise<AccountLocalAuth>;

    abstract login(data: Credentials): Auth | Promise<Auth>;

    abstract updateAccount(data: AccountUpdateDataInput, where: AccountWhereUniqueInput): Account | Promise<Account>;

    abstract updateAccountAuthLog(data: AccountAuthLogUpdateDataInput, where: AccountAuthLogWhereUniqueInput): AccountAuthLog | Promise<AccountAuthLog>;

    abstract updateAccountLocalAuth(data: AccountLocalAuthUpdateDataInput, where: AccountLocalAuthWhereUniqueInput): AccountLocalAuth | Promise<AccountLocalAuth>;

    abstract updateMeAccount(data: AccountUpdateDataInput): Account | Promise<Account>;
}

export class PageInfo {
    endCursor?: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
}

export abstract class IQuery {
    abstract account(where: AccountWhereUniqueInput): Account | Promise<Account>;

    abstract accountAuthLog(where: AccountAuthLogWhereUniqueInput): AccountAuthLog | Promise<AccountAuthLog>;

    abstract accountAuthLogs(after?: string, before?: string, first?: number, last?: number, orderBy?: AccountAuthLogOrderByItem[], skip?: number, where?: AccountAuthLogWhereInput): AccountAuthLogPaginatedResponse | Promise<AccountAuthLogPaginatedResponse>;

    abstract accountLocalAuth(where: AccountLocalAuthWhereUniqueInput): AccountLocalAuth | Promise<AccountLocalAuth>;

    abstract accountLocalAuths(after?: string, before?: string, first?: number, last?: number, orderBy?: AccountLocalAuthOrderByItem[], skip?: number, where?: AccountLocalAuthWhereInput): AccountLocalAuthPaginatedResponse | Promise<AccountLocalAuthPaginatedResponse>;

    abstract accounts(after?: string, before?: string, first?: number, last?: number, orderBy?: AccountOrderByItem[], skip?: number, where?: AccountWhereInput): AccountPaginatedResponse | Promise<AccountPaginatedResponse>;
}

export type DateTime = any;
