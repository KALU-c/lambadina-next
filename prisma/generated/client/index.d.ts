
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserGroup
 * 
 */
export type UserGroup = $Result.DefaultSelection<Prisma.$UserGroupPayload>
/**
 * Model UserUserPermission
 * 
 */
export type UserUserPermission = $Result.DefaultSelection<Prisma.$UserUserPermissionPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Mentor
 * 
 */
export type Mentor = $Result.DefaultSelection<Prisma.$MentorPayload>
/**
 * Model MentorCategory
 * 
 */
export type MentorCategory = $Result.DefaultSelection<Prisma.$MentorCategoryPayload>
/**
 * Model MentorAvailability
 * 
 */
export type MentorAvailability = $Result.DefaultSelection<Prisma.$MentorAvailabilityPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingReview
 * 
 */
export type BookingReview = $Result.DefaultSelection<Prisma.$BookingReviewPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  mentor: 'mentor',
  client: 'client',
  admin: 'admin'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGroup`: Exposes CRUD operations for the **UserGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGroups
    * const userGroups = await prisma.userGroup.findMany()
    * ```
    */
  get userGroup(): Prisma.UserGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userUserPermission`: Exposes CRUD operations for the **UserUserPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserUserPermissions
    * const userUserPermissions = await prisma.userUserPermission.findMany()
    * ```
    */
  get userUserPermission(): Prisma.UserUserPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentor`: Exposes CRUD operations for the **Mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentors
    * const mentors = await prisma.mentor.findMany()
    * ```
    */
  get mentor(): Prisma.MentorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorCategory`: Exposes CRUD operations for the **MentorCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorCategories
    * const mentorCategories = await prisma.mentorCategory.findMany()
    * ```
    */
  get mentorCategory(): Prisma.MentorCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorAvailability`: Exposes CRUD operations for the **MentorAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorAvailabilities
    * const mentorAvailabilities = await prisma.mentorAvailability.findMany()
    * ```
    */
  get mentorAvailability(): Prisma.MentorAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingReview`: Exposes CRUD operations for the **BookingReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingReviews
    * const bookingReviews = await prisma.bookingReview.findMany()
    * ```
    */
  get bookingReview(): Prisma.BookingReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserGroup: 'UserGroup',
    UserUserPermission: 'UserUserPermission',
    Client: 'Client',
    Category: 'Category',
    Mentor: 'Mentor',
    MentorCategory: 'MentorCategory',
    MentorAvailability: 'MentorAvailability',
    Booking: 'Booking',
    BookingReview: 'BookingReview',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userGroup" | "userUserPermission" | "client" | "category" | "mentor" | "mentorCategory" | "mentorAvailability" | "booking" | "bookingReview" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserGroup: {
        payload: Prisma.$UserGroupPayload<ExtArgs>
        fields: Prisma.UserGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          findFirst: {
            args: Prisma.UserGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          findMany: {
            args: Prisma.UserGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>[]
          }
          create: {
            args: Prisma.UserGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          createMany: {
            args: Prisma.UserGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          update: {
            args: Prisma.UserGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          deleteMany: {
            args: Prisma.UserGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          aggregate: {
            args: Prisma.UserGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGroup>
          }
          groupBy: {
            args: Prisma.UserGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGroupCountArgs<ExtArgs>
            result: $Utils.Optional<UserGroupCountAggregateOutputType> | number
          }
        }
      }
      UserUserPermission: {
        payload: Prisma.$UserUserPermissionPayload<ExtArgs>
        fields: Prisma.UserUserPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserUserPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserUserPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload>
          }
          findFirst: {
            args: Prisma.UserUserPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserUserPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload>
          }
          findMany: {
            args: Prisma.UserUserPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload>[]
          }
          create: {
            args: Prisma.UserUserPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload>
          }
          createMany: {
            args: Prisma.UserUserPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserUserPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload>
          }
          update: {
            args: Prisma.UserUserPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload>
          }
          deleteMany: {
            args: Prisma.UserUserPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUserPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUserPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUserPermissionPayload>
          }
          aggregate: {
            args: Prisma.UserUserPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserUserPermission>
          }
          groupBy: {
            args: Prisma.UserUserPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserUserPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserUserPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserUserPermissionCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Mentor: {
        payload: Prisma.$MentorPayload<ExtArgs>
        fields: Prisma.MentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          findFirst: {
            args: Prisma.MentorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          findMany: {
            args: Prisma.MentorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[]
          }
          create: {
            args: Prisma.MentorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          createMany: {
            args: Prisma.MentorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MentorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          update: {
            args: Prisma.MentorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          deleteMany: {
            args: Prisma.MentorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MentorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          aggregate: {
            args: Prisma.MentorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentor>
          }
          groupBy: {
            args: Prisma.MentorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorCountArgs<ExtArgs>
            result: $Utils.Optional<MentorCountAggregateOutputType> | number
          }
        }
      }
      MentorCategory: {
        payload: Prisma.$MentorCategoryPayload<ExtArgs>
        fields: Prisma.MentorCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload>
          }
          findFirst: {
            args: Prisma.MentorCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload>
          }
          findMany: {
            args: Prisma.MentorCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload>[]
          }
          create: {
            args: Prisma.MentorCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload>
          }
          createMany: {
            args: Prisma.MentorCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MentorCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload>
          }
          update: {
            args: Prisma.MentorCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MentorCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MentorCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorCategoryPayload>
          }
          aggregate: {
            args: Prisma.MentorCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorCategory>
          }
          groupBy: {
            args: Prisma.MentorCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MentorCategoryCountAggregateOutputType> | number
          }
        }
      }
      MentorAvailability: {
        payload: Prisma.$MentorAvailabilityPayload<ExtArgs>
        fields: Prisma.MentorAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.MentorAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload>
          }
          findMany: {
            args: Prisma.MentorAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload>[]
          }
          create: {
            args: Prisma.MentorAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload>
          }
          createMany: {
            args: Prisma.MentorAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MentorAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload>
          }
          update: {
            args: Prisma.MentorAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.MentorAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MentorAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.MentorAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorAvailability>
          }
          groupBy: {
            args: Prisma.MentorAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<MentorAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingReview: {
        payload: Prisma.$BookingReviewPayload<ExtArgs>
        fields: Prisma.BookingReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload>
          }
          findFirst: {
            args: Prisma.BookingReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload>
          }
          findMany: {
            args: Prisma.BookingReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload>[]
          }
          create: {
            args: Prisma.BookingReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload>
          }
          createMany: {
            args: Prisma.BookingReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload>
          }
          update: {
            args: Prisma.BookingReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload>
          }
          deleteMany: {
            args: Prisma.BookingReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingReviewPayload>
          }
          aggregate: {
            args: Prisma.BookingReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingReview>
          }
          groupBy: {
            args: Prisma.BookingReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingReviewCountArgs<ExtArgs>
            result: $Utils.Optional<BookingReviewCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userGroup?: UserGroupOmit
    userUserPermission?: UserUserPermissionOmit
    client?: ClientOmit
    category?: CategoryOmit
    mentor?: MentorOmit
    mentorCategory?: MentorCategoryOmit
    mentorAvailability?: MentorAvailabilityOmit
    booking?: BookingOmit
    bookingReview?: BookingReviewOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userGroups: number
    userPermissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | UserCountOutputTypeCountUserGroupsArgs
    userPermissions?: boolean | UserCountOutputTypeCountUserPermissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserUserPermissionWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    booking: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | ClientCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    mentorCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentorCategories?: boolean | CategoryCountOutputTypeCountMentorCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMentorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorCategoryWhereInput
  }


  /**
   * Count Type MentorCountOutputType
   */

  export type MentorCountOutputType = {
    mentorCategories: number
    availabilities: number
    booking: number
    categories: number
  }

  export type MentorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentorCategories?: boolean | MentorCountOutputTypeCountMentorCategoriesArgs
    availabilities?: boolean | MentorCountOutputTypeCountAvailabilitiesArgs
    booking?: boolean | MentorCountOutputTypeCountBookingArgs
    categories?: boolean | MentorCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCountOutputType
     */
    select?: MentorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountMentorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorCategoryWhereInput
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorAvailabilityWhereInput
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    password: string | null
    lastLogin: Date | null
    isSuperuser: boolean | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    isStaff: boolean | null
    isActive: boolean | null
    dateJoined: Date | null
    userType: $Enums.UserType | null
    phoneNumber: string | null
    profilePicture: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    password: string | null
    lastLogin: Date | null
    isSuperuser: boolean | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    isStaff: boolean | null
    isActive: boolean | null
    dateJoined: Date | null
    userType: $Enums.UserType | null
    phoneNumber: string | null
    profilePicture: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    password: number
    lastLogin: number
    isSuperuser: number
    username: number
    firstName: number
    lastName: number
    email: number
    isStaff: number
    isActive: number
    dateJoined: number
    userType: number
    phoneNumber: number
    profilePicture: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    password?: true
    lastLogin?: true
    isSuperuser?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    isStaff?: true
    isActive?: true
    dateJoined?: true
    userType?: true
    phoneNumber?: true
    profilePicture?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    password?: true
    lastLogin?: true
    isSuperuser?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    isStaff?: true
    isActive?: true
    dateJoined?: true
    userType?: true
    phoneNumber?: true
    profilePicture?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    password?: true
    lastLogin?: true
    isSuperuser?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    isStaff?: true
    isActive?: true
    dateJoined?: true
    userType?: true
    phoneNumber?: true
    profilePicture?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    password: string
    lastLogin: Date | null
    isSuperuser: boolean
    username: string
    firstName: string | null
    lastName: string | null
    email: string | null
    isStaff: boolean
    isActive: boolean
    dateJoined: Date
    userType: $Enums.UserType
    phoneNumber: string | null
    profilePicture: string | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    lastLogin?: boolean
    isSuperuser?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: boolean
    userType?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | User$clientArgs<ExtArgs>
    mentor?: boolean | User$mentorArgs<ExtArgs>
    userGroups?: boolean | User$userGroupsArgs<ExtArgs>
    userPermissions?: boolean | User$userPermissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    password?: boolean
    lastLogin?: boolean
    isSuperuser?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: boolean
    userType?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password" | "lastLogin" | "isSuperuser" | "username" | "firstName" | "lastName" | "email" | "isStaff" | "isActive" | "dateJoined" | "userType" | "phoneNumber" | "profilePicture" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | User$clientArgs<ExtArgs>
    mentor?: boolean | User$mentorArgs<ExtArgs>
    userGroups?: boolean | User$userGroupsArgs<ExtArgs>
    userPermissions?: boolean | User$userPermissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      mentor: Prisma.$MentorPayload<ExtArgs> | null
      userGroups: Prisma.$UserGroupPayload<ExtArgs>[]
      userPermissions: Prisma.$UserUserPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      password: string
      lastLogin: Date | null
      isSuperuser: boolean
      username: string
      firstName: string | null
      lastName: string | null
      email: string | null
      isStaff: boolean
      isActive: boolean
      dateJoined: Date
      userType: $Enums.UserType
      phoneNumber: string | null
      profilePicture: string | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends User$clientArgs<ExtArgs> = {}>(args?: Subset<T, User$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentor<T extends User$mentorArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userGroups<T extends User$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPermissions<T extends User$userPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly password: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly isSuperuser: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly isStaff: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly dateJoined: FieldRef<"User", 'DateTime'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.client
   */
  export type User$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * User.mentor
   */
  export type User$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    where?: MentorWhereInput
  }

  /**
   * User.userGroups
   */
  export type User$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    where?: UserGroupWhereInput
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    cursor?: UserGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * User.userPermissions
   */
  export type User$userPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    where?: UserUserPermissionWhereInput
    orderBy?: UserUserPermissionOrderByWithRelationInput | UserUserPermissionOrderByWithRelationInput[]
    cursor?: UserUserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserUserPermissionScalarFieldEnum | UserUserPermissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserGroup
   */

  export type AggregateUserGroup = {
    _count: UserGroupCountAggregateOutputType | null
    _avg: UserGroupAvgAggregateOutputType | null
    _sum: UserGroupSumAggregateOutputType | null
    _min: UserGroupMinAggregateOutputType | null
    _max: UserGroupMaxAggregateOutputType | null
  }

  export type UserGroupAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type UserGroupSumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type UserGroupMinAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type UserGroupMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type UserGroupCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    _all: number
  }


  export type UserGroupAvgAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type UserGroupSumAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type UserGroupMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type UserGroupMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type UserGroupCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    _all?: true
  }

  export type UserGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGroup to aggregate.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGroups
    **/
    _count?: true | UserGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGroupMaxAggregateInputType
  }

  export type GetUserGroupAggregateType<T extends UserGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGroup[P]>
      : GetScalarType<T[P], AggregateUserGroup[P]>
  }




  export type UserGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroupWhereInput
    orderBy?: UserGroupOrderByWithAggregationInput | UserGroupOrderByWithAggregationInput[]
    by: UserGroupScalarFieldEnum[] | UserGroupScalarFieldEnum
    having?: UserGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGroupCountAggregateInputType | true
    _avg?: UserGroupAvgAggregateInputType
    _sum?: UserGroupSumAggregateInputType
    _min?: UserGroupMinAggregateInputType
    _max?: UserGroupMaxAggregateInputType
  }

  export type UserGroupGroupByOutputType = {
    id: number
    userId: number
    groupId: number
    _count: UserGroupCountAggregateOutputType | null
    _avg: UserGroupAvgAggregateOutputType | null
    _sum: UserGroupSumAggregateOutputType | null
    _min: UserGroupMinAggregateOutputType | null
    _max: UserGroupMaxAggregateOutputType | null
  }

  type GetUserGroupGroupByPayload<T extends UserGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupGroupByOutputType[P]>
        }
      >
    >


  export type UserGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGroup"]>



  export type UserGroupSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
  }

  export type UserGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId", ExtArgs["result"]["userGroup"]>
  export type UserGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      groupId: number
    }, ExtArgs["result"]["userGroup"]>
    composites: {}
  }

  type UserGroupGetPayload<S extends boolean | null | undefined | UserGroupDefaultArgs> = $Result.GetResult<Prisma.$UserGroupPayload, S>

  type UserGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGroupCountAggregateInputType | true
    }

  export interface UserGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGroup'], meta: { name: 'UserGroup' } }
    /**
     * Find zero or one UserGroup that matches the filter.
     * @param {UserGroupFindUniqueArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGroupFindUniqueArgs>(args: SelectSubset<T, UserGroupFindUniqueArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGroupFindUniqueOrThrowArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupFindFirstArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGroupFindFirstArgs>(args?: SelectSubset<T, UserGroupFindFirstArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupFindFirstOrThrowArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGroups
     * const userGroups = await prisma.userGroup.findMany()
     * 
     * // Get first 10 UserGroups
     * const userGroups = await prisma.userGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGroupWithIdOnly = await prisma.userGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGroupFindManyArgs>(args?: SelectSubset<T, UserGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGroup.
     * @param {UserGroupCreateArgs} args - Arguments to create a UserGroup.
     * @example
     * // Create one UserGroup
     * const UserGroup = await prisma.userGroup.create({
     *   data: {
     *     // ... data to create a UserGroup
     *   }
     * })
     * 
     */
    create<T extends UserGroupCreateArgs>(args: SelectSubset<T, UserGroupCreateArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGroups.
     * @param {UserGroupCreateManyArgs} args - Arguments to create many UserGroups.
     * @example
     * // Create many UserGroups
     * const userGroup = await prisma.userGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGroupCreateManyArgs>(args?: SelectSubset<T, UserGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserGroup.
     * @param {UserGroupDeleteArgs} args - Arguments to delete one UserGroup.
     * @example
     * // Delete one UserGroup
     * const UserGroup = await prisma.userGroup.delete({
     *   where: {
     *     // ... filter to delete one UserGroup
     *   }
     * })
     * 
     */
    delete<T extends UserGroupDeleteArgs>(args: SelectSubset<T, UserGroupDeleteArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGroup.
     * @param {UserGroupUpdateArgs} args - Arguments to update one UserGroup.
     * @example
     * // Update one UserGroup
     * const userGroup = await prisma.userGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGroupUpdateArgs>(args: SelectSubset<T, UserGroupUpdateArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGroups.
     * @param {UserGroupDeleteManyArgs} args - Arguments to filter UserGroups to delete.
     * @example
     * // Delete a few UserGroups
     * const { count } = await prisma.userGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGroupDeleteManyArgs>(args?: SelectSubset<T, UserGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGroups
     * const userGroup = await prisma.userGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGroupUpdateManyArgs>(args: SelectSubset<T, UserGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserGroup.
     * @param {UserGroupUpsertArgs} args - Arguments to update or create a UserGroup.
     * @example
     * // Update or create a UserGroup
     * const userGroup = await prisma.userGroup.upsert({
     *   create: {
     *     // ... data to create a UserGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGroup we want to update
     *   }
     * })
     */
    upsert<T extends UserGroupUpsertArgs>(args: SelectSubset<T, UserGroupUpsertArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupCountArgs} args - Arguments to filter UserGroups to count.
     * @example
     * // Count the number of UserGroups
     * const count = await prisma.userGroup.count({
     *   where: {
     *     // ... the filter for the UserGroups we want to count
     *   }
     * })
    **/
    count<T extends UserGroupCountArgs>(
      args?: Subset<T, UserGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGroupAggregateArgs>(args: Subset<T, UserGroupAggregateArgs>): Prisma.PrismaPromise<GetUserGroupAggregateType<T>>

    /**
     * Group by UserGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGroup model
   */
  readonly fields: UserGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGroup model
   */
  interface UserGroupFieldRefs {
    readonly id: FieldRef<"UserGroup", 'Int'>
    readonly userId: FieldRef<"UserGroup", 'Int'>
    readonly groupId: FieldRef<"UserGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserGroup findUnique
   */
  export type UserGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup findUniqueOrThrow
   */
  export type UserGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup findFirst
   */
  export type UserGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGroups.
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGroups.
     */
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * UserGroup findFirstOrThrow
   */
  export type UserGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGroups.
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGroups.
     */
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * UserGroup findMany
   */
  export type UserGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroups to fetch.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGroups.
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * UserGroup create
   */
  export type UserGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGroup.
     */
    data: XOR<UserGroupCreateInput, UserGroupUncheckedCreateInput>
  }

  /**
   * UserGroup createMany
   */
  export type UserGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGroups.
     */
    data: UserGroupCreateManyInput | UserGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGroup update
   */
  export type UserGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGroup.
     */
    data: XOR<UserGroupUpdateInput, UserGroupUncheckedUpdateInput>
    /**
     * Choose, which UserGroup to update.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup updateMany
   */
  export type UserGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGroups.
     */
    data: XOR<UserGroupUpdateManyMutationInput, UserGroupUncheckedUpdateManyInput>
    /**
     * Filter which UserGroups to update
     */
    where?: UserGroupWhereInput
    /**
     * Limit how many UserGroups to update.
     */
    limit?: number
  }

  /**
   * UserGroup upsert
   */
  export type UserGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGroup to update in case it exists.
     */
    where: UserGroupWhereUniqueInput
    /**
     * In case the UserGroup found by the `where` argument doesn't exist, create a new UserGroup with this data.
     */
    create: XOR<UserGroupCreateInput, UserGroupUncheckedCreateInput>
    /**
     * In case the UserGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGroupUpdateInput, UserGroupUncheckedUpdateInput>
  }

  /**
   * UserGroup delete
   */
  export type UserGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter which UserGroup to delete.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup deleteMany
   */
  export type UserGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGroups to delete
     */
    where?: UserGroupWhereInput
    /**
     * Limit how many UserGroups to delete.
     */
    limit?: number
  }

  /**
   * UserGroup without action
   */
  export type UserGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
  }


  /**
   * Model UserUserPermission
   */

  export type AggregateUserUserPermission = {
    _count: UserUserPermissionCountAggregateOutputType | null
    _avg: UserUserPermissionAvgAggregateOutputType | null
    _sum: UserUserPermissionSumAggregateOutputType | null
    _min: UserUserPermissionMinAggregateOutputType | null
    _max: UserUserPermissionMaxAggregateOutputType | null
  }

  export type UserUserPermissionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    permissionId: number | null
  }

  export type UserUserPermissionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    permissionId: number | null
  }

  export type UserUserPermissionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    permissionId: number | null
  }

  export type UserUserPermissionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    permissionId: number | null
  }

  export type UserUserPermissionCountAggregateOutputType = {
    id: number
    userId: number
    permissionId: number
    _all: number
  }


  export type UserUserPermissionAvgAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
  }

  export type UserUserPermissionSumAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
  }

  export type UserUserPermissionMinAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
  }

  export type UserUserPermissionMaxAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
  }

  export type UserUserPermissionCountAggregateInputType = {
    id?: true
    userId?: true
    permissionId?: true
    _all?: true
  }

  export type UserUserPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserUserPermission to aggregate.
     */
    where?: UserUserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUserPermissions to fetch.
     */
    orderBy?: UserUserPermissionOrderByWithRelationInput | UserUserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserUserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserUserPermissions
    **/
    _count?: true | UserUserPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserUserPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserUserPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserUserPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserUserPermissionMaxAggregateInputType
  }

  export type GetUserUserPermissionAggregateType<T extends UserUserPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserUserPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserUserPermission[P]>
      : GetScalarType<T[P], AggregateUserUserPermission[P]>
  }




  export type UserUserPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserUserPermissionWhereInput
    orderBy?: UserUserPermissionOrderByWithAggregationInput | UserUserPermissionOrderByWithAggregationInput[]
    by: UserUserPermissionScalarFieldEnum[] | UserUserPermissionScalarFieldEnum
    having?: UserUserPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserUserPermissionCountAggregateInputType | true
    _avg?: UserUserPermissionAvgAggregateInputType
    _sum?: UserUserPermissionSumAggregateInputType
    _min?: UserUserPermissionMinAggregateInputType
    _max?: UserUserPermissionMaxAggregateInputType
  }

  export type UserUserPermissionGroupByOutputType = {
    id: number
    userId: number
    permissionId: number
    _count: UserUserPermissionCountAggregateOutputType | null
    _avg: UserUserPermissionAvgAggregateOutputType | null
    _sum: UserUserPermissionSumAggregateOutputType | null
    _min: UserUserPermissionMinAggregateOutputType | null
    _max: UserUserPermissionMaxAggregateOutputType | null
  }

  type GetUserUserPermissionGroupByPayload<T extends UserUserPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserUserPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserUserPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserUserPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserUserPermissionGroupByOutputType[P]>
        }
      >
    >


  export type UserUserPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    permissionId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userUserPermission"]>



  export type UserUserPermissionSelectScalar = {
    id?: boolean
    userId?: boolean
    permissionId?: boolean
  }

  export type UserUserPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "permissionId", ExtArgs["result"]["userUserPermission"]>
  export type UserUserPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserUserPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserUserPermission"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      permissionId: number
    }, ExtArgs["result"]["userUserPermission"]>
    composites: {}
  }

  type UserUserPermissionGetPayload<S extends boolean | null | undefined | UserUserPermissionDefaultArgs> = $Result.GetResult<Prisma.$UserUserPermissionPayload, S>

  type UserUserPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserUserPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserUserPermissionCountAggregateInputType | true
    }

  export interface UserUserPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserUserPermission'], meta: { name: 'UserUserPermission' } }
    /**
     * Find zero or one UserUserPermission that matches the filter.
     * @param {UserUserPermissionFindUniqueArgs} args - Arguments to find a UserUserPermission
     * @example
     * // Get one UserUserPermission
     * const userUserPermission = await prisma.userUserPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserUserPermissionFindUniqueArgs>(args: SelectSubset<T, UserUserPermissionFindUniqueArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserUserPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserUserPermissionFindUniqueOrThrowArgs} args - Arguments to find a UserUserPermission
     * @example
     * // Get one UserUserPermission
     * const userUserPermission = await prisma.userUserPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserUserPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserUserPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserUserPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUserPermissionFindFirstArgs} args - Arguments to find a UserUserPermission
     * @example
     * // Get one UserUserPermission
     * const userUserPermission = await prisma.userUserPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserUserPermissionFindFirstArgs>(args?: SelectSubset<T, UserUserPermissionFindFirstArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserUserPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUserPermissionFindFirstOrThrowArgs} args - Arguments to find a UserUserPermission
     * @example
     * // Get one UserUserPermission
     * const userUserPermission = await prisma.userUserPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserUserPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserUserPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserUserPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUserPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserUserPermissions
     * const userUserPermissions = await prisma.userUserPermission.findMany()
     * 
     * // Get first 10 UserUserPermissions
     * const userUserPermissions = await prisma.userUserPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userUserPermissionWithIdOnly = await prisma.userUserPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserUserPermissionFindManyArgs>(args?: SelectSubset<T, UserUserPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserUserPermission.
     * @param {UserUserPermissionCreateArgs} args - Arguments to create a UserUserPermission.
     * @example
     * // Create one UserUserPermission
     * const UserUserPermission = await prisma.userUserPermission.create({
     *   data: {
     *     // ... data to create a UserUserPermission
     *   }
     * })
     * 
     */
    create<T extends UserUserPermissionCreateArgs>(args: SelectSubset<T, UserUserPermissionCreateArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserUserPermissions.
     * @param {UserUserPermissionCreateManyArgs} args - Arguments to create many UserUserPermissions.
     * @example
     * // Create many UserUserPermissions
     * const userUserPermission = await prisma.userUserPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserUserPermissionCreateManyArgs>(args?: SelectSubset<T, UserUserPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserUserPermission.
     * @param {UserUserPermissionDeleteArgs} args - Arguments to delete one UserUserPermission.
     * @example
     * // Delete one UserUserPermission
     * const UserUserPermission = await prisma.userUserPermission.delete({
     *   where: {
     *     // ... filter to delete one UserUserPermission
     *   }
     * })
     * 
     */
    delete<T extends UserUserPermissionDeleteArgs>(args: SelectSubset<T, UserUserPermissionDeleteArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserUserPermission.
     * @param {UserUserPermissionUpdateArgs} args - Arguments to update one UserUserPermission.
     * @example
     * // Update one UserUserPermission
     * const userUserPermission = await prisma.userUserPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUserPermissionUpdateArgs>(args: SelectSubset<T, UserUserPermissionUpdateArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserUserPermissions.
     * @param {UserUserPermissionDeleteManyArgs} args - Arguments to filter UserUserPermissions to delete.
     * @example
     * // Delete a few UserUserPermissions
     * const { count } = await prisma.userUserPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserUserPermissionDeleteManyArgs>(args?: SelectSubset<T, UserUserPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserUserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUserPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserUserPermissions
     * const userUserPermission = await prisma.userUserPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUserPermissionUpdateManyArgs>(args: SelectSubset<T, UserUserPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserUserPermission.
     * @param {UserUserPermissionUpsertArgs} args - Arguments to update or create a UserUserPermission.
     * @example
     * // Update or create a UserUserPermission
     * const userUserPermission = await prisma.userUserPermission.upsert({
     *   create: {
     *     // ... data to create a UserUserPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserUserPermission we want to update
     *   }
     * })
     */
    upsert<T extends UserUserPermissionUpsertArgs>(args: SelectSubset<T, UserUserPermissionUpsertArgs<ExtArgs>>): Prisma__UserUserPermissionClient<$Result.GetResult<Prisma.$UserUserPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserUserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUserPermissionCountArgs} args - Arguments to filter UserUserPermissions to count.
     * @example
     * // Count the number of UserUserPermissions
     * const count = await prisma.userUserPermission.count({
     *   where: {
     *     // ... the filter for the UserUserPermissions we want to count
     *   }
     * })
    **/
    count<T extends UserUserPermissionCountArgs>(
      args?: Subset<T, UserUserPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserUserPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserUserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUserPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserUserPermissionAggregateArgs>(args: Subset<T, UserUserPermissionAggregateArgs>): Prisma.PrismaPromise<GetUserUserPermissionAggregateType<T>>

    /**
     * Group by UserUserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUserPermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserUserPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserUserPermissionGroupByArgs['orderBy'] }
        : { orderBy?: UserUserPermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserUserPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserUserPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserUserPermission model
   */
  readonly fields: UserUserPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserUserPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserUserPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserUserPermission model
   */
  interface UserUserPermissionFieldRefs {
    readonly id: FieldRef<"UserUserPermission", 'Int'>
    readonly userId: FieldRef<"UserUserPermission", 'Int'>
    readonly permissionId: FieldRef<"UserUserPermission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserUserPermission findUnique
   */
  export type UserUserPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserUserPermission to fetch.
     */
    where: UserUserPermissionWhereUniqueInput
  }

  /**
   * UserUserPermission findUniqueOrThrow
   */
  export type UserUserPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserUserPermission to fetch.
     */
    where: UserUserPermissionWhereUniqueInput
  }

  /**
   * UserUserPermission findFirst
   */
  export type UserUserPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserUserPermission to fetch.
     */
    where?: UserUserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUserPermissions to fetch.
     */
    orderBy?: UserUserPermissionOrderByWithRelationInput | UserUserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserUserPermissions.
     */
    cursor?: UserUserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserUserPermissions.
     */
    distinct?: UserUserPermissionScalarFieldEnum | UserUserPermissionScalarFieldEnum[]
  }

  /**
   * UserUserPermission findFirstOrThrow
   */
  export type UserUserPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserUserPermission to fetch.
     */
    where?: UserUserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUserPermissions to fetch.
     */
    orderBy?: UserUserPermissionOrderByWithRelationInput | UserUserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserUserPermissions.
     */
    cursor?: UserUserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserUserPermissions.
     */
    distinct?: UserUserPermissionScalarFieldEnum | UserUserPermissionScalarFieldEnum[]
  }

  /**
   * UserUserPermission findMany
   */
  export type UserUserPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserUserPermissions to fetch.
     */
    where?: UserUserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUserPermissions to fetch.
     */
    orderBy?: UserUserPermissionOrderByWithRelationInput | UserUserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserUserPermissions.
     */
    cursor?: UserUserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUserPermissions.
     */
    skip?: number
    distinct?: UserUserPermissionScalarFieldEnum | UserUserPermissionScalarFieldEnum[]
  }

  /**
   * UserUserPermission create
   */
  export type UserUserPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserUserPermission.
     */
    data: XOR<UserUserPermissionCreateInput, UserUserPermissionUncheckedCreateInput>
  }

  /**
   * UserUserPermission createMany
   */
  export type UserUserPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserUserPermissions.
     */
    data: UserUserPermissionCreateManyInput | UserUserPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserUserPermission update
   */
  export type UserUserPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserUserPermission.
     */
    data: XOR<UserUserPermissionUpdateInput, UserUserPermissionUncheckedUpdateInput>
    /**
     * Choose, which UserUserPermission to update.
     */
    where: UserUserPermissionWhereUniqueInput
  }

  /**
   * UserUserPermission updateMany
   */
  export type UserUserPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserUserPermissions.
     */
    data: XOR<UserUserPermissionUpdateManyMutationInput, UserUserPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserUserPermissions to update
     */
    where?: UserUserPermissionWhereInput
    /**
     * Limit how many UserUserPermissions to update.
     */
    limit?: number
  }

  /**
   * UserUserPermission upsert
   */
  export type UserUserPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserUserPermission to update in case it exists.
     */
    where: UserUserPermissionWhereUniqueInput
    /**
     * In case the UserUserPermission found by the `where` argument doesn't exist, create a new UserUserPermission with this data.
     */
    create: XOR<UserUserPermissionCreateInput, UserUserPermissionUncheckedCreateInput>
    /**
     * In case the UserUserPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUserPermissionUpdateInput, UserUserPermissionUncheckedUpdateInput>
  }

  /**
   * UserUserPermission delete
   */
  export type UserUserPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
    /**
     * Filter which UserUserPermission to delete.
     */
    where: UserUserPermissionWhereUniqueInput
  }

  /**
   * UserUserPermission deleteMany
   */
  export type UserUserPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserUserPermissions to delete
     */
    where?: UserUserPermissionWhereInput
    /**
     * Limit how many UserUserPermissions to delete.
     */
    limit?: number
  }

  /**
   * UserUserPermission without action
   */
  export type UserUserPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUserPermission
     */
    select?: UserUserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUserPermission
     */
    omit?: UserUserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUserPermissionInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    totalSessions: number | null
    userId: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    totalSessions: number | null
    userId: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    interests: string | null
    totalSessions: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    interests: string | null
    totalSessions: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    interests: number
    totalSessions: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    totalSessions?: true
    userId?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    totalSessions?: true
    userId?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    interests?: true
    totalSessions?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    interests?: true
    totalSessions?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    interests?: true
    totalSessions?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    interests: string
    totalSessions: number
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interests?: boolean
    totalSessions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Client$bookingArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>



  export type ClientSelectScalar = {
    id?: boolean
    interests?: boolean
    totalSessions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interests" | "totalSessions" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Client$bookingArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      interests: string
      totalSessions: number
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends Client$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Client$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly interests: FieldRef<"Client", 'String'>
    readonly totalSessions: FieldRef<"Client", 'Int'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly userId: FieldRef<"Client", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.booking
   */
  export type Client$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    mentorId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    mentorId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    mentorId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    mentorId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    mentorId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    mentorId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    mentorId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    mentorId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    mentorId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    mentorId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    mentorId: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    mentorId?: boolean
    mentorCategories?: boolean | Category$mentorCategoriesArgs<ExtArgs>
    mentor?: boolean | Category$mentorArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    mentorId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "mentorId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentorCategories?: boolean | Category$mentorCategoriesArgs<ExtArgs>
    mentor?: boolean | Category$mentorArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      mentorCategories: Prisma.$MentorCategoryPayload<ExtArgs>[]
      mentor: Prisma.$MentorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      mentorId: number | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentorCategories<T extends Category$mentorCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$mentorCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentor<T extends Category$mentorArgs<ExtArgs> = {}>(args?: Subset<T, Category$mentorArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly mentorId: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.mentorCategories
   */
  export type Category$mentorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    where?: MentorCategoryWhereInput
    orderBy?: MentorCategoryOrderByWithRelationInput | MentorCategoryOrderByWithRelationInput[]
    cursor?: MentorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorCategoryScalarFieldEnum | MentorCategoryScalarFieldEnum[]
  }

  /**
   * Category.mentor
   */
  export type Category$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    where?: MentorWhereInput
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Mentor
   */

  export type AggregateMentor = {
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  export type MentorAvgAggregateOutputType = {
    id: number | null
    pricePerMinute: number | null
    rating: number | null
    totalSessions: number | null
    userId: number | null
  }

  export type MentorSumAggregateOutputType = {
    id: number | null
    pricePerMinute: number | null
    rating: number | null
    totalSessions: number | null
    userId: number | null
  }

  export type MentorMinAggregateOutputType = {
    id: number | null
    bio: string | null
    pricePerMinute: number | null
    isAvailable: boolean | null
    rating: number | null
    totalSessions: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type MentorMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    pricePerMinute: number | null
    isAvailable: boolean | null
    rating: number | null
    totalSessions: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type MentorCountAggregateOutputType = {
    id: number
    bio: number
    pricePerMinute: number
    isAvailable: number
    rating: number
    totalSessions: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MentorAvgAggregateInputType = {
    id?: true
    pricePerMinute?: true
    rating?: true
    totalSessions?: true
    userId?: true
  }

  export type MentorSumAggregateInputType = {
    id?: true
    pricePerMinute?: true
    rating?: true
    totalSessions?: true
    userId?: true
  }

  export type MentorMinAggregateInputType = {
    id?: true
    bio?: true
    pricePerMinute?: true
    isAvailable?: true
    rating?: true
    totalSessions?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MentorMaxAggregateInputType = {
    id?: true
    bio?: true
    pricePerMinute?: true
    isAvailable?: true
    rating?: true
    totalSessions?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MentorCountAggregateInputType = {
    id?: true
    bio?: true
    pricePerMinute?: true
    isAvailable?: true
    rating?: true
    totalSessions?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentor to aggregate.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mentors
    **/
    _count?: true | MentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorMaxAggregateInputType
  }

  export type GetMentorAggregateType<T extends MentorAggregateArgs> = {
        [P in keyof T & keyof AggregateMentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor[P]>
      : GetScalarType<T[P], AggregateMentor[P]>
  }




  export type MentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorWhereInput
    orderBy?: MentorOrderByWithAggregationInput | MentorOrderByWithAggregationInput[]
    by: MentorScalarFieldEnum[] | MentorScalarFieldEnum
    having?: MentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorCountAggregateInputType | true
    _avg?: MentorAvgAggregateInputType
    _sum?: MentorSumAggregateInputType
    _min?: MentorMinAggregateInputType
    _max?: MentorMaxAggregateInputType
  }

  export type MentorGroupByOutputType = {
    id: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  type GetMentorGroupByPayload<T extends MentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorGroupByOutputType[P]>
            : GetScalarType<T[P], MentorGroupByOutputType[P]>
        }
      >
    >


  export type MentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    pricePerMinute?: boolean
    isAvailable?: boolean
    rating?: boolean
    totalSessions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mentorCategories?: boolean | Mentor$mentorCategoriesArgs<ExtArgs>
    availabilities?: boolean | Mentor$availabilitiesArgs<ExtArgs>
    booking?: boolean | Mentor$bookingArgs<ExtArgs>
    categories?: boolean | Mentor$categoriesArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor"]>



  export type MentorSelectScalar = {
    id?: boolean
    bio?: boolean
    pricePerMinute?: boolean
    isAvailable?: boolean
    rating?: boolean
    totalSessions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bio" | "pricePerMinute" | "isAvailable" | "rating" | "totalSessions" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["mentor"]>
  export type MentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mentorCategories?: boolean | Mentor$mentorCategoriesArgs<ExtArgs>
    availabilities?: boolean | Mentor$availabilitiesArgs<ExtArgs>
    booking?: boolean | Mentor$bookingArgs<ExtArgs>
    categories?: boolean | Mentor$categoriesArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mentorCategories: Prisma.$MentorCategoryPayload<ExtArgs>[]
      availabilities: Prisma.$MentorAvailabilityPayload<ExtArgs>[]
      booking: Prisma.$BookingPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bio: string
      pricePerMinute: number
      isAvailable: boolean
      rating: number
      totalSessions: number
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["mentor"]>
    composites: {}
  }

  type MentorGetPayload<S extends boolean | null | undefined | MentorDefaultArgs> = $Result.GetResult<Prisma.$MentorPayload, S>

  type MentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorCountAggregateInputType | true
    }

  export interface MentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mentor'], meta: { name: 'Mentor' } }
    /**
     * Find zero or one Mentor that matches the filter.
     * @param {MentorFindUniqueArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorFindUniqueArgs>(args: SelectSubset<T, MentorFindUniqueArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorFindUniqueOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorFindFirstArgs>(args?: SelectSubset<T, MentorFindFirstArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentors
     * const mentors = await prisma.mentor.findMany()
     * 
     * // Get first 10 Mentors
     * const mentors = await prisma.mentor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorWithIdOnly = await prisma.mentor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorFindManyArgs>(args?: SelectSubset<T, MentorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mentor.
     * @param {MentorCreateArgs} args - Arguments to create a Mentor.
     * @example
     * // Create one Mentor
     * const Mentor = await prisma.mentor.create({
     *   data: {
     *     // ... data to create a Mentor
     *   }
     * })
     * 
     */
    create<T extends MentorCreateArgs>(args: SelectSubset<T, MentorCreateArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentors.
     * @param {MentorCreateManyArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorCreateManyArgs>(args?: SelectSubset<T, MentorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mentor.
     * @param {MentorDeleteArgs} args - Arguments to delete one Mentor.
     * @example
     * // Delete one Mentor
     * const Mentor = await prisma.mentor.delete({
     *   where: {
     *     // ... filter to delete one Mentor
     *   }
     * })
     * 
     */
    delete<T extends MentorDeleteArgs>(args: SelectSubset<T, MentorDeleteArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mentor.
     * @param {MentorUpdateArgs} args - Arguments to update one Mentor.
     * @example
     * // Update one Mentor
     * const mentor = await prisma.mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorUpdateArgs>(args: SelectSubset<T, MentorUpdateArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentors.
     * @param {MentorDeleteManyArgs} args - Arguments to filter Mentors to delete.
     * @example
     * // Delete a few Mentors
     * const { count } = await prisma.mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorDeleteManyArgs>(args?: SelectSubset<T, MentorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorUpdateManyArgs>(args: SelectSubset<T, MentorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mentor.
     * @param {MentorUpsertArgs} args - Arguments to update or create a Mentor.
     * @example
     * // Update or create a Mentor
     * const mentor = await prisma.mentor.upsert({
     *   create: {
     *     // ... data to create a Mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor we want to update
     *   }
     * })
     */
    upsert<T extends MentorUpsertArgs>(args: SelectSubset<T, MentorUpsertArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCountArgs} args - Arguments to filter Mentors to count.
     * @example
     * // Count the number of Mentors
     * const count = await prisma.mentor.count({
     *   where: {
     *     // ... the filter for the Mentors we want to count
     *   }
     * })
    **/
    count<T extends MentorCountArgs>(
      args?: Subset<T, MentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorAggregateArgs>(args: Subset<T, MentorAggregateArgs>): Prisma.PrismaPromise<GetMentorAggregateType<T>>

    /**
     * Group by Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorGroupByArgs['orderBy'] }
        : { orderBy?: MentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mentor model
   */
  readonly fields: MentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentorCategories<T extends Mentor$mentorCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$mentorCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availabilities<T extends Mentor$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking<T extends Mentor$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Mentor$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mentor model
   */
  interface MentorFieldRefs {
    readonly id: FieldRef<"Mentor", 'Int'>
    readonly bio: FieldRef<"Mentor", 'String'>
    readonly pricePerMinute: FieldRef<"Mentor", 'Float'>
    readonly isAvailable: FieldRef<"Mentor", 'Boolean'>
    readonly rating: FieldRef<"Mentor", 'Float'>
    readonly totalSessions: FieldRef<"Mentor", 'Int'>
    readonly createdAt: FieldRef<"Mentor", 'DateTime'>
    readonly updatedAt: FieldRef<"Mentor", 'DateTime'>
    readonly userId: FieldRef<"Mentor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mentor findUnique
   */
  export type MentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor findUniqueOrThrow
   */
  export type MentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor findFirst
   */
  export type MentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor findFirstOrThrow
   */
  export type MentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor findMany
   */
  export type MentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentors to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor create
   */
  export type MentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The data needed to create a Mentor.
     */
    data: XOR<MentorCreateInput, MentorUncheckedCreateInput>
  }

  /**
   * Mentor createMany
   */
  export type MentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mentors.
     */
    data: MentorCreateManyInput | MentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mentor update
   */
  export type MentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The data needed to update a Mentor.
     */
    data: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
    /**
     * Choose, which Mentor to update.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor updateMany
   */
  export type MentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mentors.
     */
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>
    /**
     * Filter which Mentors to update
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to update.
     */
    limit?: number
  }

  /**
   * Mentor upsert
   */
  export type MentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The filter to search for the Mentor to update in case it exists.
     */
    where: MentorWhereUniqueInput
    /**
     * In case the Mentor found by the `where` argument doesn't exist, create a new Mentor with this data.
     */
    create: XOR<MentorCreateInput, MentorUncheckedCreateInput>
    /**
     * In case the Mentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
  }

  /**
   * Mentor delete
   */
  export type MentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter which Mentor to delete.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor deleteMany
   */
  export type MentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentors to delete
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to delete.
     */
    limit?: number
  }

  /**
   * Mentor.mentorCategories
   */
  export type Mentor$mentorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    where?: MentorCategoryWhereInput
    orderBy?: MentorCategoryOrderByWithRelationInput | MentorCategoryOrderByWithRelationInput[]
    cursor?: MentorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorCategoryScalarFieldEnum | MentorCategoryScalarFieldEnum[]
  }

  /**
   * Mentor.availabilities
   */
  export type Mentor$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    where?: MentorAvailabilityWhereInput
    orderBy?: MentorAvailabilityOrderByWithRelationInput | MentorAvailabilityOrderByWithRelationInput[]
    cursor?: MentorAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorAvailabilityScalarFieldEnum | MentorAvailabilityScalarFieldEnum[]
  }

  /**
   * Mentor.booking
   */
  export type Mentor$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Mentor.categories
   */
  export type Mentor$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Mentor without action
   */
  export type MentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
  }


  /**
   * Model MentorCategory
   */

  export type AggregateMentorCategory = {
    _count: MentorCategoryCountAggregateOutputType | null
    _avg: MentorCategoryAvgAggregateOutputType | null
    _sum: MentorCategorySumAggregateOutputType | null
    _min: MentorCategoryMinAggregateOutputType | null
    _max: MentorCategoryMaxAggregateOutputType | null
  }

  export type MentorCategoryAvgAggregateOutputType = {
    id: number | null
    mentorId: number | null
    categoryId: number | null
  }

  export type MentorCategorySumAggregateOutputType = {
    id: number | null
    mentorId: number | null
    categoryId: number | null
  }

  export type MentorCategoryMinAggregateOutputType = {
    id: number | null
    mentorId: number | null
    categoryId: number | null
  }

  export type MentorCategoryMaxAggregateOutputType = {
    id: number | null
    mentorId: number | null
    categoryId: number | null
  }

  export type MentorCategoryCountAggregateOutputType = {
    id: number
    mentorId: number
    categoryId: number
    _all: number
  }


  export type MentorCategoryAvgAggregateInputType = {
    id?: true
    mentorId?: true
    categoryId?: true
  }

  export type MentorCategorySumAggregateInputType = {
    id?: true
    mentorId?: true
    categoryId?: true
  }

  export type MentorCategoryMinAggregateInputType = {
    id?: true
    mentorId?: true
    categoryId?: true
  }

  export type MentorCategoryMaxAggregateInputType = {
    id?: true
    mentorId?: true
    categoryId?: true
  }

  export type MentorCategoryCountAggregateInputType = {
    id?: true
    mentorId?: true
    categoryId?: true
    _all?: true
  }

  export type MentorCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorCategory to aggregate.
     */
    where?: MentorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorCategories to fetch.
     */
    orderBy?: MentorCategoryOrderByWithRelationInput | MentorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorCategories
    **/
    _count?: true | MentorCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorCategoryMaxAggregateInputType
  }

  export type GetMentorCategoryAggregateType<T extends MentorCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorCategory[P]>
      : GetScalarType<T[P], AggregateMentorCategory[P]>
  }




  export type MentorCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorCategoryWhereInput
    orderBy?: MentorCategoryOrderByWithAggregationInput | MentorCategoryOrderByWithAggregationInput[]
    by: MentorCategoryScalarFieldEnum[] | MentorCategoryScalarFieldEnum
    having?: MentorCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorCategoryCountAggregateInputType | true
    _avg?: MentorCategoryAvgAggregateInputType
    _sum?: MentorCategorySumAggregateInputType
    _min?: MentorCategoryMinAggregateInputType
    _max?: MentorCategoryMaxAggregateInputType
  }

  export type MentorCategoryGroupByOutputType = {
    id: number
    mentorId: number
    categoryId: number
    _count: MentorCategoryCountAggregateOutputType | null
    _avg: MentorCategoryAvgAggregateOutputType | null
    _sum: MentorCategorySumAggregateOutputType | null
    _min: MentorCategoryMinAggregateOutputType | null
    _max: MentorCategoryMaxAggregateOutputType | null
  }

  type GetMentorCategoryGroupByPayload<T extends MentorCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MentorCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MentorCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mentorId?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorCategory"]>



  export type MentorCategorySelectScalar = {
    id?: boolean
    mentorId?: boolean
    categoryId?: boolean
  }

  export type MentorCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mentorId" | "categoryId", ExtArgs["result"]["mentorCategory"]>
  export type MentorCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }

  export type $MentorCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      mentor: Prisma.$MentorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mentorId: number
      categoryId: number
    }, ExtArgs["result"]["mentorCategory"]>
    composites: {}
  }

  type MentorCategoryGetPayload<S extends boolean | null | undefined | MentorCategoryDefaultArgs> = $Result.GetResult<Prisma.$MentorCategoryPayload, S>

  type MentorCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorCategoryCountAggregateInputType | true
    }

  export interface MentorCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorCategory'], meta: { name: 'MentorCategory' } }
    /**
     * Find zero or one MentorCategory that matches the filter.
     * @param {MentorCategoryFindUniqueArgs} args - Arguments to find a MentorCategory
     * @example
     * // Get one MentorCategory
     * const mentorCategory = await prisma.mentorCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorCategoryFindUniqueArgs>(args: SelectSubset<T, MentorCategoryFindUniqueArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorCategoryFindUniqueOrThrowArgs} args - Arguments to find a MentorCategory
     * @example
     * // Get one MentorCategory
     * const mentorCategory = await prisma.mentorCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCategoryFindFirstArgs} args - Arguments to find a MentorCategory
     * @example
     * // Get one MentorCategory
     * const mentorCategory = await prisma.mentorCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorCategoryFindFirstArgs>(args?: SelectSubset<T, MentorCategoryFindFirstArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCategoryFindFirstOrThrowArgs} args - Arguments to find a MentorCategory
     * @example
     * // Get one MentorCategory
     * const mentorCategory = await prisma.mentorCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorCategories
     * const mentorCategories = await prisma.mentorCategory.findMany()
     * 
     * // Get first 10 MentorCategories
     * const mentorCategories = await prisma.mentorCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorCategoryWithIdOnly = await prisma.mentorCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorCategoryFindManyArgs>(args?: SelectSubset<T, MentorCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorCategory.
     * @param {MentorCategoryCreateArgs} args - Arguments to create a MentorCategory.
     * @example
     * // Create one MentorCategory
     * const MentorCategory = await prisma.mentorCategory.create({
     *   data: {
     *     // ... data to create a MentorCategory
     *   }
     * })
     * 
     */
    create<T extends MentorCategoryCreateArgs>(args: SelectSubset<T, MentorCategoryCreateArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorCategories.
     * @param {MentorCategoryCreateManyArgs} args - Arguments to create many MentorCategories.
     * @example
     * // Create many MentorCategories
     * const mentorCategory = await prisma.mentorCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorCategoryCreateManyArgs>(args?: SelectSubset<T, MentorCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MentorCategory.
     * @param {MentorCategoryDeleteArgs} args - Arguments to delete one MentorCategory.
     * @example
     * // Delete one MentorCategory
     * const MentorCategory = await prisma.mentorCategory.delete({
     *   where: {
     *     // ... filter to delete one MentorCategory
     *   }
     * })
     * 
     */
    delete<T extends MentorCategoryDeleteArgs>(args: SelectSubset<T, MentorCategoryDeleteArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorCategory.
     * @param {MentorCategoryUpdateArgs} args - Arguments to update one MentorCategory.
     * @example
     * // Update one MentorCategory
     * const mentorCategory = await prisma.mentorCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorCategoryUpdateArgs>(args: SelectSubset<T, MentorCategoryUpdateArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorCategories.
     * @param {MentorCategoryDeleteManyArgs} args - Arguments to filter MentorCategories to delete.
     * @example
     * // Delete a few MentorCategories
     * const { count } = await prisma.mentorCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorCategoryDeleteManyArgs>(args?: SelectSubset<T, MentorCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorCategories
     * const mentorCategory = await prisma.mentorCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorCategoryUpdateManyArgs>(args: SelectSubset<T, MentorCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MentorCategory.
     * @param {MentorCategoryUpsertArgs} args - Arguments to update or create a MentorCategory.
     * @example
     * // Update or create a MentorCategory
     * const mentorCategory = await prisma.mentorCategory.upsert({
     *   create: {
     *     // ... data to create a MentorCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorCategory we want to update
     *   }
     * })
     */
    upsert<T extends MentorCategoryUpsertArgs>(args: SelectSubset<T, MentorCategoryUpsertArgs<ExtArgs>>): Prisma__MentorCategoryClient<$Result.GetResult<Prisma.$MentorCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCategoryCountArgs} args - Arguments to filter MentorCategories to count.
     * @example
     * // Count the number of MentorCategories
     * const count = await prisma.mentorCategory.count({
     *   where: {
     *     // ... the filter for the MentorCategories we want to count
     *   }
     * })
    **/
    count<T extends MentorCategoryCountArgs>(
      args?: Subset<T, MentorCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorCategoryAggregateArgs>(args: Subset<T, MentorCategoryAggregateArgs>): Prisma.PrismaPromise<GetMentorCategoryAggregateType<T>>

    /**
     * Group by MentorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MentorCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorCategory model
   */
  readonly fields: MentorCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends MentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentorDefaultArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentorCategory model
   */
  interface MentorCategoryFieldRefs {
    readonly id: FieldRef<"MentorCategory", 'Int'>
    readonly mentorId: FieldRef<"MentorCategory", 'Int'>
    readonly categoryId: FieldRef<"MentorCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MentorCategory findUnique
   */
  export type MentorCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MentorCategory to fetch.
     */
    where: MentorCategoryWhereUniqueInput
  }

  /**
   * MentorCategory findUniqueOrThrow
   */
  export type MentorCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MentorCategory to fetch.
     */
    where: MentorCategoryWhereUniqueInput
  }

  /**
   * MentorCategory findFirst
   */
  export type MentorCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MentorCategory to fetch.
     */
    where?: MentorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorCategories to fetch.
     */
    orderBy?: MentorCategoryOrderByWithRelationInput | MentorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorCategories.
     */
    cursor?: MentorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorCategories.
     */
    distinct?: MentorCategoryScalarFieldEnum | MentorCategoryScalarFieldEnum[]
  }

  /**
   * MentorCategory findFirstOrThrow
   */
  export type MentorCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MentorCategory to fetch.
     */
    where?: MentorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorCategories to fetch.
     */
    orderBy?: MentorCategoryOrderByWithRelationInput | MentorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorCategories.
     */
    cursor?: MentorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorCategories.
     */
    distinct?: MentorCategoryScalarFieldEnum | MentorCategoryScalarFieldEnum[]
  }

  /**
   * MentorCategory findMany
   */
  export type MentorCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MentorCategories to fetch.
     */
    where?: MentorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorCategories to fetch.
     */
    orderBy?: MentorCategoryOrderByWithRelationInput | MentorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorCategories.
     */
    cursor?: MentorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorCategories.
     */
    skip?: number
    distinct?: MentorCategoryScalarFieldEnum | MentorCategoryScalarFieldEnum[]
  }

  /**
   * MentorCategory create
   */
  export type MentorCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorCategory.
     */
    data: XOR<MentorCategoryCreateInput, MentorCategoryUncheckedCreateInput>
  }

  /**
   * MentorCategory createMany
   */
  export type MentorCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorCategories.
     */
    data: MentorCategoryCreateManyInput | MentorCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentorCategory update
   */
  export type MentorCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorCategory.
     */
    data: XOR<MentorCategoryUpdateInput, MentorCategoryUncheckedUpdateInput>
    /**
     * Choose, which MentorCategory to update.
     */
    where: MentorCategoryWhereUniqueInput
  }

  /**
   * MentorCategory updateMany
   */
  export type MentorCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorCategories.
     */
    data: XOR<MentorCategoryUpdateManyMutationInput, MentorCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MentorCategories to update
     */
    where?: MentorCategoryWhereInput
    /**
     * Limit how many MentorCategories to update.
     */
    limit?: number
  }

  /**
   * MentorCategory upsert
   */
  export type MentorCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorCategory to update in case it exists.
     */
    where: MentorCategoryWhereUniqueInput
    /**
     * In case the MentorCategory found by the `where` argument doesn't exist, create a new MentorCategory with this data.
     */
    create: XOR<MentorCategoryCreateInput, MentorCategoryUncheckedCreateInput>
    /**
     * In case the MentorCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorCategoryUpdateInput, MentorCategoryUncheckedUpdateInput>
  }

  /**
   * MentorCategory delete
   */
  export type MentorCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
    /**
     * Filter which MentorCategory to delete.
     */
    where: MentorCategoryWhereUniqueInput
  }

  /**
   * MentorCategory deleteMany
   */
  export type MentorCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorCategories to delete
     */
    where?: MentorCategoryWhereInput
    /**
     * Limit how many MentorCategories to delete.
     */
    limit?: number
  }

  /**
   * MentorCategory without action
   */
  export type MentorCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCategory
     */
    select?: MentorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorCategory
     */
    omit?: MentorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MentorAvailability
   */

  export type AggregateMentorAvailability = {
    _count: MentorAvailabilityCountAggregateOutputType | null
    _avg: MentorAvailabilityAvgAggregateOutputType | null
    _sum: MentorAvailabilitySumAggregateOutputType | null
    _min: MentorAvailabilityMinAggregateOutputType | null
    _max: MentorAvailabilityMaxAggregateOutputType | null
  }

  export type MentorAvailabilityAvgAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    mentorId: number | null
  }

  export type MentorAvailabilitySumAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    mentorId: number | null
  }

  export type MentorAvailabilityMinAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    startTime: Date | null
    endTime: Date | null
    isAvailable: boolean | null
    mentorId: number | null
  }

  export type MentorAvailabilityMaxAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    startTime: Date | null
    endTime: Date | null
    isAvailable: boolean | null
    mentorId: number | null
  }

  export type MentorAvailabilityCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isAvailable: number
    mentorId: number
    _all: number
  }


  export type MentorAvailabilityAvgAggregateInputType = {
    id?: true
    dayOfWeek?: true
    mentorId?: true
  }

  export type MentorAvailabilitySumAggregateInputType = {
    id?: true
    dayOfWeek?: true
    mentorId?: true
  }

  export type MentorAvailabilityMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    mentorId?: true
  }

  export type MentorAvailabilityMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    mentorId?: true
  }

  export type MentorAvailabilityCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    mentorId?: true
    _all?: true
  }

  export type MentorAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorAvailability to aggregate.
     */
    where?: MentorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorAvailabilities to fetch.
     */
    orderBy?: MentorAvailabilityOrderByWithRelationInput | MentorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorAvailabilities
    **/
    _count?: true | MentorAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorAvailabilityMaxAggregateInputType
  }

  export type GetMentorAvailabilityAggregateType<T extends MentorAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorAvailability[P]>
      : GetScalarType<T[P], AggregateMentorAvailability[P]>
  }




  export type MentorAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorAvailabilityWhereInput
    orderBy?: MentorAvailabilityOrderByWithAggregationInput | MentorAvailabilityOrderByWithAggregationInput[]
    by: MentorAvailabilityScalarFieldEnum[] | MentorAvailabilityScalarFieldEnum
    having?: MentorAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorAvailabilityCountAggregateInputType | true
    _avg?: MentorAvailabilityAvgAggregateInputType
    _sum?: MentorAvailabilitySumAggregateInputType
    _min?: MentorAvailabilityMinAggregateInputType
    _max?: MentorAvailabilityMaxAggregateInputType
  }

  export type MentorAvailabilityGroupByOutputType = {
    id: number
    dayOfWeek: number
    startTime: Date
    endTime: Date
    isAvailable: boolean
    mentorId: number
    _count: MentorAvailabilityCountAggregateOutputType | null
    _avg: MentorAvailabilityAvgAggregateOutputType | null
    _sum: MentorAvailabilitySumAggregateOutputType | null
    _min: MentorAvailabilityMinAggregateOutputType | null
    _max: MentorAvailabilityMaxAggregateOutputType | null
  }

  type GetMentorAvailabilityGroupByPayload<T extends MentorAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], MentorAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type MentorAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    mentorId?: boolean
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorAvailability"]>



  export type MentorAvailabilitySelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    mentorId?: boolean
  }

  export type MentorAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "endTime" | "isAvailable" | "mentorId", ExtArgs["result"]["mentorAvailability"]>
  export type MentorAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
  }

  export type $MentorAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorAvailability"
    objects: {
      mentor: Prisma.$MentorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dayOfWeek: number
      startTime: Date
      endTime: Date
      isAvailable: boolean
      mentorId: number
    }, ExtArgs["result"]["mentorAvailability"]>
    composites: {}
  }

  type MentorAvailabilityGetPayload<S extends boolean | null | undefined | MentorAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$MentorAvailabilityPayload, S>

  type MentorAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorAvailabilityCountAggregateInputType | true
    }

  export interface MentorAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorAvailability'], meta: { name: 'MentorAvailability' } }
    /**
     * Find zero or one MentorAvailability that matches the filter.
     * @param {MentorAvailabilityFindUniqueArgs} args - Arguments to find a MentorAvailability
     * @example
     * // Get one MentorAvailability
     * const mentorAvailability = await prisma.mentorAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorAvailabilityFindUniqueArgs>(args: SelectSubset<T, MentorAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a MentorAvailability
     * @example
     * // Get one MentorAvailability
     * const mentorAvailability = await prisma.mentorAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAvailabilityFindFirstArgs} args - Arguments to find a MentorAvailability
     * @example
     * // Get one MentorAvailability
     * const mentorAvailability = await prisma.mentorAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorAvailabilityFindFirstArgs>(args?: SelectSubset<T, MentorAvailabilityFindFirstArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAvailabilityFindFirstOrThrowArgs} args - Arguments to find a MentorAvailability
     * @example
     * // Get one MentorAvailability
     * const mentorAvailability = await prisma.mentorAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorAvailabilities
     * const mentorAvailabilities = await prisma.mentorAvailability.findMany()
     * 
     * // Get first 10 MentorAvailabilities
     * const mentorAvailabilities = await prisma.mentorAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorAvailabilityWithIdOnly = await prisma.mentorAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorAvailabilityFindManyArgs>(args?: SelectSubset<T, MentorAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorAvailability.
     * @param {MentorAvailabilityCreateArgs} args - Arguments to create a MentorAvailability.
     * @example
     * // Create one MentorAvailability
     * const MentorAvailability = await prisma.mentorAvailability.create({
     *   data: {
     *     // ... data to create a MentorAvailability
     *   }
     * })
     * 
     */
    create<T extends MentorAvailabilityCreateArgs>(args: SelectSubset<T, MentorAvailabilityCreateArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorAvailabilities.
     * @param {MentorAvailabilityCreateManyArgs} args - Arguments to create many MentorAvailabilities.
     * @example
     * // Create many MentorAvailabilities
     * const mentorAvailability = await prisma.mentorAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorAvailabilityCreateManyArgs>(args?: SelectSubset<T, MentorAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MentorAvailability.
     * @param {MentorAvailabilityDeleteArgs} args - Arguments to delete one MentorAvailability.
     * @example
     * // Delete one MentorAvailability
     * const MentorAvailability = await prisma.mentorAvailability.delete({
     *   where: {
     *     // ... filter to delete one MentorAvailability
     *   }
     * })
     * 
     */
    delete<T extends MentorAvailabilityDeleteArgs>(args: SelectSubset<T, MentorAvailabilityDeleteArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorAvailability.
     * @param {MentorAvailabilityUpdateArgs} args - Arguments to update one MentorAvailability.
     * @example
     * // Update one MentorAvailability
     * const mentorAvailability = await prisma.mentorAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorAvailabilityUpdateArgs>(args: SelectSubset<T, MentorAvailabilityUpdateArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorAvailabilities.
     * @param {MentorAvailabilityDeleteManyArgs} args - Arguments to filter MentorAvailabilities to delete.
     * @example
     * // Delete a few MentorAvailabilities
     * const { count } = await prisma.mentorAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorAvailabilityDeleteManyArgs>(args?: SelectSubset<T, MentorAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorAvailabilities
     * const mentorAvailability = await prisma.mentorAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorAvailabilityUpdateManyArgs>(args: SelectSubset<T, MentorAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MentorAvailability.
     * @param {MentorAvailabilityUpsertArgs} args - Arguments to update or create a MentorAvailability.
     * @example
     * // Update or create a MentorAvailability
     * const mentorAvailability = await prisma.mentorAvailability.upsert({
     *   create: {
     *     // ... data to create a MentorAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorAvailability we want to update
     *   }
     * })
     */
    upsert<T extends MentorAvailabilityUpsertArgs>(args: SelectSubset<T, MentorAvailabilityUpsertArgs<ExtArgs>>): Prisma__MentorAvailabilityClient<$Result.GetResult<Prisma.$MentorAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAvailabilityCountArgs} args - Arguments to filter MentorAvailabilities to count.
     * @example
     * // Count the number of MentorAvailabilities
     * const count = await prisma.mentorAvailability.count({
     *   where: {
     *     // ... the filter for the MentorAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends MentorAvailabilityCountArgs>(
      args?: Subset<T, MentorAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorAvailabilityAggregateArgs>(args: Subset<T, MentorAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetMentorAvailabilityAggregateType<T>>

    /**
     * Group by MentorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: MentorAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorAvailability model
   */
  readonly fields: MentorAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends MentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentorDefaultArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentorAvailability model
   */
  interface MentorAvailabilityFieldRefs {
    readonly id: FieldRef<"MentorAvailability", 'Int'>
    readonly dayOfWeek: FieldRef<"MentorAvailability", 'Int'>
    readonly startTime: FieldRef<"MentorAvailability", 'DateTime'>
    readonly endTime: FieldRef<"MentorAvailability", 'DateTime'>
    readonly isAvailable: FieldRef<"MentorAvailability", 'Boolean'>
    readonly mentorId: FieldRef<"MentorAvailability", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MentorAvailability findUnique
   */
  export type MentorAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MentorAvailability to fetch.
     */
    where: MentorAvailabilityWhereUniqueInput
  }

  /**
   * MentorAvailability findUniqueOrThrow
   */
  export type MentorAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MentorAvailability to fetch.
     */
    where: MentorAvailabilityWhereUniqueInput
  }

  /**
   * MentorAvailability findFirst
   */
  export type MentorAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MentorAvailability to fetch.
     */
    where?: MentorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorAvailabilities to fetch.
     */
    orderBy?: MentorAvailabilityOrderByWithRelationInput | MentorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorAvailabilities.
     */
    cursor?: MentorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorAvailabilities.
     */
    distinct?: MentorAvailabilityScalarFieldEnum | MentorAvailabilityScalarFieldEnum[]
  }

  /**
   * MentorAvailability findFirstOrThrow
   */
  export type MentorAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MentorAvailability to fetch.
     */
    where?: MentorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorAvailabilities to fetch.
     */
    orderBy?: MentorAvailabilityOrderByWithRelationInput | MentorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorAvailabilities.
     */
    cursor?: MentorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorAvailabilities.
     */
    distinct?: MentorAvailabilityScalarFieldEnum | MentorAvailabilityScalarFieldEnum[]
  }

  /**
   * MentorAvailability findMany
   */
  export type MentorAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MentorAvailabilities to fetch.
     */
    where?: MentorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorAvailabilities to fetch.
     */
    orderBy?: MentorAvailabilityOrderByWithRelationInput | MentorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorAvailabilities.
     */
    cursor?: MentorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorAvailabilities.
     */
    skip?: number
    distinct?: MentorAvailabilityScalarFieldEnum | MentorAvailabilityScalarFieldEnum[]
  }

  /**
   * MentorAvailability create
   */
  export type MentorAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorAvailability.
     */
    data: XOR<MentorAvailabilityCreateInput, MentorAvailabilityUncheckedCreateInput>
  }

  /**
   * MentorAvailability createMany
   */
  export type MentorAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorAvailabilities.
     */
    data: MentorAvailabilityCreateManyInput | MentorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentorAvailability update
   */
  export type MentorAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorAvailability.
     */
    data: XOR<MentorAvailabilityUpdateInput, MentorAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which MentorAvailability to update.
     */
    where: MentorAvailabilityWhereUniqueInput
  }

  /**
   * MentorAvailability updateMany
   */
  export type MentorAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorAvailabilities.
     */
    data: XOR<MentorAvailabilityUpdateManyMutationInput, MentorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which MentorAvailabilities to update
     */
    where?: MentorAvailabilityWhereInput
    /**
     * Limit how many MentorAvailabilities to update.
     */
    limit?: number
  }

  /**
   * MentorAvailability upsert
   */
  export type MentorAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorAvailability to update in case it exists.
     */
    where: MentorAvailabilityWhereUniqueInput
    /**
     * In case the MentorAvailability found by the `where` argument doesn't exist, create a new MentorAvailability with this data.
     */
    create: XOR<MentorAvailabilityCreateInput, MentorAvailabilityUncheckedCreateInput>
    /**
     * In case the MentorAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorAvailabilityUpdateInput, MentorAvailabilityUncheckedUpdateInput>
  }

  /**
   * MentorAvailability delete
   */
  export type MentorAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which MentorAvailability to delete.
     */
    where: MentorAvailabilityWhereUniqueInput
  }

  /**
   * MentorAvailability deleteMany
   */
  export type MentorAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorAvailabilities to delete
     */
    where?: MentorAvailabilityWhereInput
    /**
     * Limit how many MentorAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * MentorAvailability without action
   */
  export type MentorAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorAvailability
     */
    select?: MentorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorAvailability
     */
    omit?: MentorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
    amountPaid: number | null
    platformFee: number | null
    mentorPayout: number | null
    clientId: number | null
    mentorId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
    amountPaid: number | null
    platformFee: number | null
    mentorPayout: number | null
    clientId: number | null
    mentorId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    sessionDate: Date | null
    startTime: Date | null
    endTime: Date | null
    durationMinutes: number | null
    callType: string | null
    status: string | null
    amountPaid: number | null
    platformFee: number | null
    mentorPayout: number | null
    paymentStatus: boolean | null
    callLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
    mentorId: number | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    sessionDate: Date | null
    startTime: Date | null
    endTime: Date | null
    durationMinutes: number | null
    callType: string | null
    status: string | null
    amountPaid: number | null
    platformFee: number | null
    mentorPayout: number | null
    paymentStatus: boolean | null
    callLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
    mentorId: number | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    sessionDate: number
    startTime: number
    endTime: number
    durationMinutes: number
    callType: number
    status: number
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: number
    callLink: number
    createdAt: number
    updatedAt: number
    clientId: number
    mentorId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    durationMinutes?: true
    amountPaid?: true
    platformFee?: true
    mentorPayout?: true
    clientId?: true
    mentorId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    durationMinutes?: true
    amountPaid?: true
    platformFee?: true
    mentorPayout?: true
    clientId?: true
    mentorId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    callType?: true
    status?: true
    amountPaid?: true
    platformFee?: true
    mentorPayout?: true
    paymentStatus?: true
    callLink?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    mentorId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    callType?: true
    status?: true
    amountPaid?: true
    platformFee?: true
    mentorPayout?: true
    paymentStatus?: true
    callLink?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    mentorId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    callType?: true
    status?: true
    amountPaid?: true
    platformFee?: true
    mentorPayout?: true
    paymentStatus?: true
    callLink?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    mentorId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    sessionDate: Date
    startTime: Date
    endTime: Date
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink: string | null
    createdAt: Date
    updatedAt: Date
    clientId: number
    mentorId: number
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    callType?: boolean
    status?: boolean
    amountPaid?: boolean
    platformFee?: boolean
    mentorPayout?: boolean
    paymentStatus?: boolean
    callLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    mentorId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    callType?: boolean
    status?: boolean
    amountPaid?: boolean
    platformFee?: boolean
    mentorPayout?: boolean
    paymentStatus?: boolean
    callLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    mentorId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionDate" | "startTime" | "endTime" | "durationMinutes" | "callType" | "status" | "amountPaid" | "platformFee" | "mentorPayout" | "paymentStatus" | "callLink" | "createdAt" | "updatedAt" | "clientId" | "mentorId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    mentor?: boolean | MentorDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      mentor: Prisma.$MentorPayload<ExtArgs>
      review: Prisma.$BookingReviewPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionDate: Date
      startTime: Date
      endTime: Date
      durationMinutes: number
      callType: string
      status: string
      amountPaid: number
      platformFee: number
      mentorPayout: number
      paymentStatus: boolean
      callLink: string | null
      createdAt: Date
      updatedAt: Date
      clientId: number
      mentorId: number
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends MentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentorDefaultArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly sessionDate: FieldRef<"Booking", 'DateTime'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly durationMinutes: FieldRef<"Booking", 'Int'>
    readonly callType: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly amountPaid: FieldRef<"Booking", 'Float'>
    readonly platformFee: FieldRef<"Booking", 'Float'>
    readonly mentorPayout: FieldRef<"Booking", 'Float'>
    readonly paymentStatus: FieldRef<"Booking", 'Boolean'>
    readonly callLink: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly clientId: FieldRef<"Booking", 'Int'>
    readonly mentorId: FieldRef<"Booking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    where?: BookingReviewWhereInput
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingReview
   */

  export type AggregateBookingReview = {
    _count: BookingReviewCountAggregateOutputType | null
    _avg: BookingReviewAvgAggregateOutputType | null
    _sum: BookingReviewSumAggregateOutputType | null
    _min: BookingReviewMinAggregateOutputType | null
    _max: BookingReviewMaxAggregateOutputType | null
  }

  export type BookingReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    bookingId: number | null
  }

  export type BookingReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    bookingId: number | null
  }

  export type BookingReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    bookingId: number | null
  }

  export type BookingReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    bookingId: number | null
  }

  export type BookingReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    createdAt: number
    bookingId: number
    _all: number
  }


  export type BookingReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    bookingId?: true
  }

  export type BookingReviewSumAggregateInputType = {
    id?: true
    rating?: true
    bookingId?: true
  }

  export type BookingReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    bookingId?: true
  }

  export type BookingReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    bookingId?: true
  }

  export type BookingReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    bookingId?: true
    _all?: true
  }

  export type BookingReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingReview to aggregate.
     */
    where?: BookingReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingReviews to fetch.
     */
    orderBy?: BookingReviewOrderByWithRelationInput | BookingReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingReviews
    **/
    _count?: true | BookingReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingReviewMaxAggregateInputType
  }

  export type GetBookingReviewAggregateType<T extends BookingReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingReview[P]>
      : GetScalarType<T[P], AggregateBookingReview[P]>
  }




  export type BookingReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingReviewWhereInput
    orderBy?: BookingReviewOrderByWithAggregationInput | BookingReviewOrderByWithAggregationInput[]
    by: BookingReviewScalarFieldEnum[] | BookingReviewScalarFieldEnum
    having?: BookingReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingReviewCountAggregateInputType | true
    _avg?: BookingReviewAvgAggregateInputType
    _sum?: BookingReviewSumAggregateInputType
    _min?: BookingReviewMinAggregateInputType
    _max?: BookingReviewMaxAggregateInputType
  }

  export type BookingReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string
    createdAt: Date
    bookingId: number
    _count: BookingReviewCountAggregateOutputType | null
    _avg: BookingReviewAvgAggregateOutputType | null
    _sum: BookingReviewSumAggregateOutputType | null
    _min: BookingReviewMinAggregateOutputType | null
    _max: BookingReviewMaxAggregateOutputType | null
  }

  type GetBookingReviewGroupByPayload<T extends BookingReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingReviewGroupByOutputType[P]>
            : GetScalarType<T[P], BookingReviewGroupByOutputType[P]>
        }
      >
    >


  export type BookingReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingReview"]>



  export type BookingReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    bookingId?: boolean
  }

  export type BookingReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "createdAt" | "bookingId", ExtArgs["result"]["bookingReview"]>
  export type BookingReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingReview"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string
      createdAt: Date
      bookingId: number
    }, ExtArgs["result"]["bookingReview"]>
    composites: {}
  }

  type BookingReviewGetPayload<S extends boolean | null | undefined | BookingReviewDefaultArgs> = $Result.GetResult<Prisma.$BookingReviewPayload, S>

  type BookingReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingReviewCountAggregateInputType | true
    }

  export interface BookingReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingReview'], meta: { name: 'BookingReview' } }
    /**
     * Find zero or one BookingReview that matches the filter.
     * @param {BookingReviewFindUniqueArgs} args - Arguments to find a BookingReview
     * @example
     * // Get one BookingReview
     * const bookingReview = await prisma.bookingReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingReviewFindUniqueArgs>(args: SelectSubset<T, BookingReviewFindUniqueArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingReviewFindUniqueOrThrowArgs} args - Arguments to find a BookingReview
     * @example
     * // Get one BookingReview
     * const bookingReview = await prisma.bookingReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingReviewFindFirstArgs} args - Arguments to find a BookingReview
     * @example
     * // Get one BookingReview
     * const bookingReview = await prisma.bookingReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingReviewFindFirstArgs>(args?: SelectSubset<T, BookingReviewFindFirstArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingReviewFindFirstOrThrowArgs} args - Arguments to find a BookingReview
     * @example
     * // Get one BookingReview
     * const bookingReview = await prisma.bookingReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingReviews
     * const bookingReviews = await prisma.bookingReview.findMany()
     * 
     * // Get first 10 BookingReviews
     * const bookingReviews = await prisma.bookingReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingReviewWithIdOnly = await prisma.bookingReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingReviewFindManyArgs>(args?: SelectSubset<T, BookingReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingReview.
     * @param {BookingReviewCreateArgs} args - Arguments to create a BookingReview.
     * @example
     * // Create one BookingReview
     * const BookingReview = await prisma.bookingReview.create({
     *   data: {
     *     // ... data to create a BookingReview
     *   }
     * })
     * 
     */
    create<T extends BookingReviewCreateArgs>(args: SelectSubset<T, BookingReviewCreateArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingReviews.
     * @param {BookingReviewCreateManyArgs} args - Arguments to create many BookingReviews.
     * @example
     * // Create many BookingReviews
     * const bookingReview = await prisma.bookingReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingReviewCreateManyArgs>(args?: SelectSubset<T, BookingReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingReview.
     * @param {BookingReviewDeleteArgs} args - Arguments to delete one BookingReview.
     * @example
     * // Delete one BookingReview
     * const BookingReview = await prisma.bookingReview.delete({
     *   where: {
     *     // ... filter to delete one BookingReview
     *   }
     * })
     * 
     */
    delete<T extends BookingReviewDeleteArgs>(args: SelectSubset<T, BookingReviewDeleteArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingReview.
     * @param {BookingReviewUpdateArgs} args - Arguments to update one BookingReview.
     * @example
     * // Update one BookingReview
     * const bookingReview = await prisma.bookingReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingReviewUpdateArgs>(args: SelectSubset<T, BookingReviewUpdateArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingReviews.
     * @param {BookingReviewDeleteManyArgs} args - Arguments to filter BookingReviews to delete.
     * @example
     * // Delete a few BookingReviews
     * const { count } = await prisma.bookingReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingReviewDeleteManyArgs>(args?: SelectSubset<T, BookingReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingReviews
     * const bookingReview = await prisma.bookingReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingReviewUpdateManyArgs>(args: SelectSubset<T, BookingReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingReview.
     * @param {BookingReviewUpsertArgs} args - Arguments to update or create a BookingReview.
     * @example
     * // Update or create a BookingReview
     * const bookingReview = await prisma.bookingReview.upsert({
     *   create: {
     *     // ... data to create a BookingReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingReview we want to update
     *   }
     * })
     */
    upsert<T extends BookingReviewUpsertArgs>(args: SelectSubset<T, BookingReviewUpsertArgs<ExtArgs>>): Prisma__BookingReviewClient<$Result.GetResult<Prisma.$BookingReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingReviewCountArgs} args - Arguments to filter BookingReviews to count.
     * @example
     * // Count the number of BookingReviews
     * const count = await prisma.bookingReview.count({
     *   where: {
     *     // ... the filter for the BookingReviews we want to count
     *   }
     * })
    **/
    count<T extends BookingReviewCountArgs>(
      args?: Subset<T, BookingReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingReviewAggregateArgs>(args: Subset<T, BookingReviewAggregateArgs>): Prisma.PrismaPromise<GetBookingReviewAggregateType<T>>

    /**
     * Group by BookingReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingReviewGroupByArgs['orderBy'] }
        : { orderBy?: BookingReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingReview model
   */
  readonly fields: BookingReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingReview model
   */
  interface BookingReviewFieldRefs {
    readonly id: FieldRef<"BookingReview", 'Int'>
    readonly rating: FieldRef<"BookingReview", 'Int'>
    readonly comment: FieldRef<"BookingReview", 'String'>
    readonly createdAt: FieldRef<"BookingReview", 'DateTime'>
    readonly bookingId: FieldRef<"BookingReview", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingReview findUnique
   */
  export type BookingReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookingReview to fetch.
     */
    where: BookingReviewWhereUniqueInput
  }

  /**
   * BookingReview findUniqueOrThrow
   */
  export type BookingReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookingReview to fetch.
     */
    where: BookingReviewWhereUniqueInput
  }

  /**
   * BookingReview findFirst
   */
  export type BookingReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookingReview to fetch.
     */
    where?: BookingReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingReviews to fetch.
     */
    orderBy?: BookingReviewOrderByWithRelationInput | BookingReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingReviews.
     */
    cursor?: BookingReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingReviews.
     */
    distinct?: BookingReviewScalarFieldEnum | BookingReviewScalarFieldEnum[]
  }

  /**
   * BookingReview findFirstOrThrow
   */
  export type BookingReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookingReview to fetch.
     */
    where?: BookingReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingReviews to fetch.
     */
    orderBy?: BookingReviewOrderByWithRelationInput | BookingReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingReviews.
     */
    cursor?: BookingReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingReviews.
     */
    distinct?: BookingReviewScalarFieldEnum | BookingReviewScalarFieldEnum[]
  }

  /**
   * BookingReview findMany
   */
  export type BookingReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookingReviews to fetch.
     */
    where?: BookingReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingReviews to fetch.
     */
    orderBy?: BookingReviewOrderByWithRelationInput | BookingReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingReviews.
     */
    cursor?: BookingReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingReviews.
     */
    skip?: number
    distinct?: BookingReviewScalarFieldEnum | BookingReviewScalarFieldEnum[]
  }

  /**
   * BookingReview create
   */
  export type BookingReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingReview.
     */
    data: XOR<BookingReviewCreateInput, BookingReviewUncheckedCreateInput>
  }

  /**
   * BookingReview createMany
   */
  export type BookingReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingReviews.
     */
    data: BookingReviewCreateManyInput | BookingReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingReview update
   */
  export type BookingReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingReview.
     */
    data: XOR<BookingReviewUpdateInput, BookingReviewUncheckedUpdateInput>
    /**
     * Choose, which BookingReview to update.
     */
    where: BookingReviewWhereUniqueInput
  }

  /**
   * BookingReview updateMany
   */
  export type BookingReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingReviews.
     */
    data: XOR<BookingReviewUpdateManyMutationInput, BookingReviewUncheckedUpdateManyInput>
    /**
     * Filter which BookingReviews to update
     */
    where?: BookingReviewWhereInput
    /**
     * Limit how many BookingReviews to update.
     */
    limit?: number
  }

  /**
   * BookingReview upsert
   */
  export type BookingReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingReview to update in case it exists.
     */
    where: BookingReviewWhereUniqueInput
    /**
     * In case the BookingReview found by the `where` argument doesn't exist, create a new BookingReview with this data.
     */
    create: XOR<BookingReviewCreateInput, BookingReviewUncheckedCreateInput>
    /**
     * In case the BookingReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingReviewUpdateInput, BookingReviewUncheckedUpdateInput>
  }

  /**
   * BookingReview delete
   */
  export type BookingReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
    /**
     * Filter which BookingReview to delete.
     */
    where: BookingReviewWhereUniqueInput
  }

  /**
   * BookingReview deleteMany
   */
  export type BookingReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingReviews to delete
     */
    where?: BookingReviewWhereInput
    /**
     * Limit how many BookingReviews to delete.
     */
    limit?: number
  }

  /**
   * BookingReview without action
   */
  export type BookingReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingReview
     */
    select?: BookingReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingReview
     */
    omit?: BookingReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingReviewInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    bookingId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    bookingId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    txRef: string | null
    amount: number | null
    currency: string | null
    status: string | null
    chapaTransactionRef: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bookingId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    txRef: string | null
    amount: number | null
    currency: string | null
    status: string | null
    chapaTransactionRef: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bookingId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    txRef: number
    amount: number
    currency: number
    status: number
    chapaTransactionRef: number
    createdAt: number
    updatedAt: number
    bookingId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    bookingId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    bookingId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    txRef?: true
    amount?: true
    currency?: true
    status?: true
    chapaTransactionRef?: true
    createdAt?: true
    updatedAt?: true
    bookingId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    txRef?: true
    amount?: true
    currency?: true
    status?: true
    chapaTransactionRef?: true
    createdAt?: true
    updatedAt?: true
    bookingId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    txRef?: true
    amount?: true
    currency?: true
    status?: true
    chapaTransactionRef?: true
    createdAt?: true
    updatedAt?: true
    bookingId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    txRef: string
    amount: number
    currency: string
    status: string
    chapaTransactionRef: string
    createdAt: Date
    updatedAt: Date
    bookingId: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txRef?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    chapaTransactionRef?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    txRef?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    chapaTransactionRef?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txRef" | "amount" | "currency" | "status" | "chapaTransactionRef" | "createdAt" | "updatedAt" | "bookingId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      txRef: string
      amount: number
      currency: string
      status: string
      chapaTransactionRef: string
      createdAt: Date
      updatedAt: Date
      bookingId: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly txRef: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly chapaTransactionRef: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly bookingId: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    password: 'password',
    lastLogin: 'lastLogin',
    isSuperuser: 'isSuperuser',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    isStaff: 'isStaff',
    isActive: 'isActive',
    dateJoined: 'dateJoined',
    userType: 'userType',
    phoneNumber: 'phoneNumber',
    profilePicture: 'profilePicture',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserGroupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId'
  };

  export type UserGroupScalarFieldEnum = (typeof UserGroupScalarFieldEnum)[keyof typeof UserGroupScalarFieldEnum]


  export const UserUserPermissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    permissionId: 'permissionId'
  };

  export type UserUserPermissionScalarFieldEnum = (typeof UserUserPermissionScalarFieldEnum)[keyof typeof UserUserPermissionScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    interests: 'interests',
    totalSessions: 'totalSessions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    mentorId: 'mentorId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MentorScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    pricePerMinute: 'pricePerMinute',
    isAvailable: 'isAvailable',
    rating: 'rating',
    totalSessions: 'totalSessions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const MentorCategoryScalarFieldEnum: {
    id: 'id',
    mentorId: 'mentorId',
    categoryId: 'categoryId'
  };

  export type MentorCategoryScalarFieldEnum = (typeof MentorCategoryScalarFieldEnum)[keyof typeof MentorCategoryScalarFieldEnum]


  export const MentorAvailabilityScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isAvailable: 'isAvailable',
    mentorId: 'mentorId'
  };

  export type MentorAvailabilityScalarFieldEnum = (typeof MentorAvailabilityScalarFieldEnum)[keyof typeof MentorAvailabilityScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    sessionDate: 'sessionDate',
    startTime: 'startTime',
    endTime: 'endTime',
    durationMinutes: 'durationMinutes',
    callType: 'callType',
    status: 'status',
    amountPaid: 'amountPaid',
    platformFee: 'platformFee',
    mentorPayout: 'mentorPayout',
    paymentStatus: 'paymentStatus',
    callLink: 'callLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId',
    mentorId: 'mentorId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    bookingId: 'bookingId'
  };

  export type BookingReviewScalarFieldEnum = (typeof BookingReviewScalarFieldEnum)[keyof typeof BookingReviewScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    txRef: 'txRef',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    chapaTransactionRef: 'chapaTransactionRef',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bookingId: 'bookingId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    password: 'password',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    profilePicture: 'profilePicture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ClientOrderByRelevanceFieldEnum: {
    interests: 'interests'
  };

  export type ClientOrderByRelevanceFieldEnum = (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const MentorOrderByRelevanceFieldEnum: {
    bio: 'bio'
  };

  export type MentorOrderByRelevanceFieldEnum = (typeof MentorOrderByRelevanceFieldEnum)[keyof typeof MentorOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    callType: 'callType',
    status: 'status',
    callLink: 'callLink'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const BookingReviewOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type BookingReviewOrderByRelevanceFieldEnum = (typeof BookingReviewOrderByRelevanceFieldEnum)[keyof typeof BookingReviewOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    txRef: 'txRef',
    currency: 'currency',
    status: 'status',
    chapaTransactionRef: 'chapaTransactionRef'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isSuperuser?: BoolFilter<"User"> | boolean
    username?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    isStaff?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    dateJoined?: DateTimeFilter<"User"> | Date | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
    userGroups?: UserGroupListRelationFilter
    userPermissions?: UserUserPermissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isSuperuser?: SortOrder
    username?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isStaff?: SortOrder
    isActive?: SortOrder
    dateJoined?: SortOrder
    userType?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    mentor?: MentorOrderByWithRelationInput
    userGroups?: UserGroupOrderByRelationAggregateInput
    userPermissions?: UserUserPermissionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isSuperuser?: BoolFilter<"User"> | boolean
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    isStaff?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    dateJoined?: DateTimeFilter<"User"> | Date | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
    userGroups?: UserGroupListRelationFilter
    userPermissions?: UserUserPermissionListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isSuperuser?: SortOrder
    username?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isStaff?: SortOrder
    isActive?: SortOrder
    dateJoined?: SortOrder
    userType?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    password?: StringWithAggregatesFilter<"User"> | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isSuperuser?: BoolWithAggregatesFilter<"User"> | boolean
    username?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    isStaff?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    dateJoined?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserGroupWhereInput = {
    AND?: UserGroupWhereInput | UserGroupWhereInput[]
    OR?: UserGroupWhereInput[]
    NOT?: UserGroupWhereInput | UserGroupWhereInput[]
    id?: IntFilter<"UserGroup"> | number
    userId?: IntFilter<"UserGroup"> | number
    groupId?: IntFilter<"UserGroup"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserGroupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_groupId?: UserGroupUserIdGroupIdCompoundUniqueInput
    AND?: UserGroupWhereInput | UserGroupWhereInput[]
    OR?: UserGroupWhereInput[]
    NOT?: UserGroupWhereInput | UserGroupWhereInput[]
    userId?: IntFilter<"UserGroup"> | number
    groupId?: IntFilter<"UserGroup"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_groupId">

  export type UserGroupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    _count?: UserGroupCountOrderByAggregateInput
    _avg?: UserGroupAvgOrderByAggregateInput
    _max?: UserGroupMaxOrderByAggregateInput
    _min?: UserGroupMinOrderByAggregateInput
    _sum?: UserGroupSumOrderByAggregateInput
  }

  export type UserGroupScalarWhereWithAggregatesInput = {
    AND?: UserGroupScalarWhereWithAggregatesInput | UserGroupScalarWhereWithAggregatesInput[]
    OR?: UserGroupScalarWhereWithAggregatesInput[]
    NOT?: UserGroupScalarWhereWithAggregatesInput | UserGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGroup"> | number
    userId?: IntWithAggregatesFilter<"UserGroup"> | number
    groupId?: IntWithAggregatesFilter<"UserGroup"> | number
  }

  export type UserUserPermissionWhereInput = {
    AND?: UserUserPermissionWhereInput | UserUserPermissionWhereInput[]
    OR?: UserUserPermissionWhereInput[]
    NOT?: UserUserPermissionWhereInput | UserUserPermissionWhereInput[]
    id?: IntFilter<"UserUserPermission"> | number
    userId?: IntFilter<"UserUserPermission"> | number
    permissionId?: IntFilter<"UserUserPermission"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserUserPermissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserUserPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_permissionId?: UserUserPermissionUserIdPermissionIdCompoundUniqueInput
    AND?: UserUserPermissionWhereInput | UserUserPermissionWhereInput[]
    OR?: UserUserPermissionWhereInput[]
    NOT?: UserUserPermissionWhereInput | UserUserPermissionWhereInput[]
    userId?: IntFilter<"UserUserPermission"> | number
    permissionId?: IntFilter<"UserUserPermission"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_permissionId">

  export type UserUserPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
    _count?: UserUserPermissionCountOrderByAggregateInput
    _avg?: UserUserPermissionAvgOrderByAggregateInput
    _max?: UserUserPermissionMaxOrderByAggregateInput
    _min?: UserUserPermissionMinOrderByAggregateInput
    _sum?: UserUserPermissionSumOrderByAggregateInput
  }

  export type UserUserPermissionScalarWhereWithAggregatesInput = {
    AND?: UserUserPermissionScalarWhereWithAggregatesInput | UserUserPermissionScalarWhereWithAggregatesInput[]
    OR?: UserUserPermissionScalarWhereWithAggregatesInput[]
    NOT?: UserUserPermissionScalarWhereWithAggregatesInput | UserUserPermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserUserPermission"> | number
    userId?: IntWithAggregatesFilter<"UserUserPermission"> | number
    permissionId?: IntWithAggregatesFilter<"UserUserPermission"> | number
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    interests?: StringFilter<"Client"> | string
    totalSessions?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: IntFilter<"Client"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: BookingListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    interests?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByRelationAggregateInput
    _relevance?: ClientOrderByRelevanceInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    interests?: StringFilter<"Client"> | string
    totalSessions?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: BookingListRelationFilter
  }, "id" | "userId">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    interests?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    interests?: StringWithAggregatesFilter<"Client"> | string
    totalSessions?: IntWithAggregatesFilter<"Client"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    userId?: IntWithAggregatesFilter<"Client"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    mentorId?: IntNullableFilter<"Category"> | number | null
    mentorCategories?: MentorCategoryListRelationFilter
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    mentorId?: SortOrderInput | SortOrder
    mentorCategories?: MentorCategoryOrderByRelationAggregateInput
    mentor?: MentorOrderByWithRelationInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    mentorId?: IntNullableFilter<"Category"> | number | null
    mentorCategories?: MentorCategoryListRelationFilter
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    mentorId?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    mentorId?: IntNullableWithAggregatesFilter<"Category"> | number | null
  }

  export type MentorWhereInput = {
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    id?: IntFilter<"Mentor"> | number
    bio?: StringFilter<"Mentor"> | string
    pricePerMinute?: FloatFilter<"Mentor"> | number
    isAvailable?: BoolFilter<"Mentor"> | boolean
    rating?: FloatFilter<"Mentor"> | number
    totalSessions?: IntFilter<"Mentor"> | number
    createdAt?: DateTimeFilter<"Mentor"> | Date | string
    updatedAt?: DateTimeFilter<"Mentor"> | Date | string
    userId?: IntFilter<"Mentor"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentorCategories?: MentorCategoryListRelationFilter
    availabilities?: MentorAvailabilityListRelationFilter
    booking?: BookingListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type MentorOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    pricePerMinute?: SortOrder
    isAvailable?: SortOrder
    rating?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    mentorCategories?: MentorCategoryOrderByRelationAggregateInput
    availabilities?: MentorAvailabilityOrderByRelationAggregateInput
    booking?: BookingOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    _relevance?: MentorOrderByRelevanceInput
  }

  export type MentorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    bio?: StringFilter<"Mentor"> | string
    pricePerMinute?: FloatFilter<"Mentor"> | number
    isAvailable?: BoolFilter<"Mentor"> | boolean
    rating?: FloatFilter<"Mentor"> | number
    totalSessions?: IntFilter<"Mentor"> | number
    createdAt?: DateTimeFilter<"Mentor"> | Date | string
    updatedAt?: DateTimeFilter<"Mentor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentorCategories?: MentorCategoryListRelationFilter
    availabilities?: MentorAvailabilityListRelationFilter
    booking?: BookingListRelationFilter
    categories?: CategoryListRelationFilter
  }, "id" | "userId">

  export type MentorOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    pricePerMinute?: SortOrder
    isAvailable?: SortOrder
    rating?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: MentorCountOrderByAggregateInput
    _avg?: MentorAvgOrderByAggregateInput
    _max?: MentorMaxOrderByAggregateInput
    _min?: MentorMinOrderByAggregateInput
    _sum?: MentorSumOrderByAggregateInput
  }

  export type MentorScalarWhereWithAggregatesInput = {
    AND?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[]
    OR?: MentorScalarWhereWithAggregatesInput[]
    NOT?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mentor"> | number
    bio?: StringWithAggregatesFilter<"Mentor"> | string
    pricePerMinute?: FloatWithAggregatesFilter<"Mentor"> | number
    isAvailable?: BoolWithAggregatesFilter<"Mentor"> | boolean
    rating?: FloatWithAggregatesFilter<"Mentor"> | number
    totalSessions?: IntWithAggregatesFilter<"Mentor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mentor"> | Date | string
    userId?: IntWithAggregatesFilter<"Mentor"> | number
  }

  export type MentorCategoryWhereInput = {
    AND?: MentorCategoryWhereInput | MentorCategoryWhereInput[]
    OR?: MentorCategoryWhereInput[]
    NOT?: MentorCategoryWhereInput | MentorCategoryWhereInput[]
    id?: IntFilter<"MentorCategory"> | number
    mentorId?: IntFilter<"MentorCategory"> | number
    categoryId?: IntFilter<"MentorCategory"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }

  export type MentorCategoryOrderByWithRelationInput = {
    id?: SortOrder
    mentorId?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    mentor?: MentorOrderByWithRelationInput
  }

  export type MentorCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mentorId_categoryId?: MentorCategoryMentorIdCategoryIdCompoundUniqueInput
    AND?: MentorCategoryWhereInput | MentorCategoryWhereInput[]
    OR?: MentorCategoryWhereInput[]
    NOT?: MentorCategoryWhereInput | MentorCategoryWhereInput[]
    mentorId?: IntFilter<"MentorCategory"> | number
    categoryId?: IntFilter<"MentorCategory"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }, "id" | "mentorId_categoryId">

  export type MentorCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    mentorId?: SortOrder
    categoryId?: SortOrder
    _count?: MentorCategoryCountOrderByAggregateInput
    _avg?: MentorCategoryAvgOrderByAggregateInput
    _max?: MentorCategoryMaxOrderByAggregateInput
    _min?: MentorCategoryMinOrderByAggregateInput
    _sum?: MentorCategorySumOrderByAggregateInput
  }

  export type MentorCategoryScalarWhereWithAggregatesInput = {
    AND?: MentorCategoryScalarWhereWithAggregatesInput | MentorCategoryScalarWhereWithAggregatesInput[]
    OR?: MentorCategoryScalarWhereWithAggregatesInput[]
    NOT?: MentorCategoryScalarWhereWithAggregatesInput | MentorCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MentorCategory"> | number
    mentorId?: IntWithAggregatesFilter<"MentorCategory"> | number
    categoryId?: IntWithAggregatesFilter<"MentorCategory"> | number
  }

  export type MentorAvailabilityWhereInput = {
    AND?: MentorAvailabilityWhereInput | MentorAvailabilityWhereInput[]
    OR?: MentorAvailabilityWhereInput[]
    NOT?: MentorAvailabilityWhereInput | MentorAvailabilityWhereInput[]
    id?: IntFilter<"MentorAvailability"> | number
    dayOfWeek?: IntFilter<"MentorAvailability"> | number
    startTime?: DateTimeFilter<"MentorAvailability"> | Date | string
    endTime?: DateTimeFilter<"MentorAvailability"> | Date | string
    isAvailable?: BoolFilter<"MentorAvailability"> | boolean
    mentorId?: IntFilter<"MentorAvailability"> | number
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }

  export type MentorAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    mentorId?: SortOrder
    mentor?: MentorOrderByWithRelationInput
  }

  export type MentorAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mentorId_dayOfWeek_startTime_endTime?: MentorAvailabilityMentorIdDayOfWeekStartTimeEndTimeCompoundUniqueInput
    AND?: MentorAvailabilityWhereInput | MentorAvailabilityWhereInput[]
    OR?: MentorAvailabilityWhereInput[]
    NOT?: MentorAvailabilityWhereInput | MentorAvailabilityWhereInput[]
    dayOfWeek?: IntFilter<"MentorAvailability"> | number
    startTime?: DateTimeFilter<"MentorAvailability"> | Date | string
    endTime?: DateTimeFilter<"MentorAvailability"> | Date | string
    isAvailable?: BoolFilter<"MentorAvailability"> | boolean
    mentorId?: IntFilter<"MentorAvailability"> | number
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
  }, "id" | "mentorId_dayOfWeek_startTime_endTime">

  export type MentorAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    mentorId?: SortOrder
    _count?: MentorAvailabilityCountOrderByAggregateInput
    _avg?: MentorAvailabilityAvgOrderByAggregateInput
    _max?: MentorAvailabilityMaxOrderByAggregateInput
    _min?: MentorAvailabilityMinOrderByAggregateInput
    _sum?: MentorAvailabilitySumOrderByAggregateInput
  }

  export type MentorAvailabilityScalarWhereWithAggregatesInput = {
    AND?: MentorAvailabilityScalarWhereWithAggregatesInput | MentorAvailabilityScalarWhereWithAggregatesInput[]
    OR?: MentorAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: MentorAvailabilityScalarWhereWithAggregatesInput | MentorAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MentorAvailability"> | number
    dayOfWeek?: IntWithAggregatesFilter<"MentorAvailability"> | number
    startTime?: DateTimeWithAggregatesFilter<"MentorAvailability"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"MentorAvailability"> | Date | string
    isAvailable?: BoolWithAggregatesFilter<"MentorAvailability"> | boolean
    mentorId?: IntWithAggregatesFilter<"MentorAvailability"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    sessionDate?: DateTimeFilter<"Booking"> | Date | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    durationMinutes?: IntFilter<"Booking"> | number
    callType?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    amountPaid?: FloatFilter<"Booking"> | number
    platformFee?: FloatFilter<"Booking"> | number
    mentorPayout?: FloatFilter<"Booking"> | number
    paymentStatus?: BoolFilter<"Booking"> | boolean
    callLink?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    clientId?: IntFilter<"Booking"> | number
    mentorId?: IntFilter<"Booking"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
    review?: XOR<BookingReviewNullableScalarRelationFilter, BookingReviewWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    amountPaid?: SortOrder
    platformFee?: SortOrder
    mentorPayout?: SortOrder
    paymentStatus?: SortOrder
    callLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    mentorId?: SortOrder
    client?: ClientOrderByWithRelationInput
    mentor?: MentorOrderByWithRelationInput
    review?: BookingReviewOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    sessionDate?: DateTimeFilter<"Booking"> | Date | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    durationMinutes?: IntFilter<"Booking"> | number
    callType?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    amountPaid?: FloatFilter<"Booking"> | number
    platformFee?: FloatFilter<"Booking"> | number
    mentorPayout?: FloatFilter<"Booking"> | number
    paymentStatus?: BoolFilter<"Booking"> | boolean
    callLink?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    clientId?: IntFilter<"Booking"> | number
    mentorId?: IntFilter<"Booking"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    mentor?: XOR<MentorScalarRelationFilter, MentorWhereInput>
    review?: XOR<BookingReviewNullableScalarRelationFilter, BookingReviewWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    amountPaid?: SortOrder
    platformFee?: SortOrder
    mentorPayout?: SortOrder
    paymentStatus?: SortOrder
    callLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    mentorId?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    sessionDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    durationMinutes?: IntWithAggregatesFilter<"Booking"> | number
    callType?: StringWithAggregatesFilter<"Booking"> | string
    status?: StringWithAggregatesFilter<"Booking"> | string
    amountPaid?: FloatWithAggregatesFilter<"Booking"> | number
    platformFee?: FloatWithAggregatesFilter<"Booking"> | number
    mentorPayout?: FloatWithAggregatesFilter<"Booking"> | number
    paymentStatus?: BoolWithAggregatesFilter<"Booking"> | boolean
    callLink?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    clientId?: IntWithAggregatesFilter<"Booking"> | number
    mentorId?: IntWithAggregatesFilter<"Booking"> | number
  }

  export type BookingReviewWhereInput = {
    AND?: BookingReviewWhereInput | BookingReviewWhereInput[]
    OR?: BookingReviewWhereInput[]
    NOT?: BookingReviewWhereInput | BookingReviewWhereInput[]
    id?: IntFilter<"BookingReview"> | number
    rating?: IntFilter<"BookingReview"> | number
    comment?: StringFilter<"BookingReview"> | string
    createdAt?: DateTimeFilter<"BookingReview"> | Date | string
    bookingId?: IntFilter<"BookingReview"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    bookingId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: BookingReviewOrderByRelevanceInput
  }

  export type BookingReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookingId?: number
    AND?: BookingReviewWhereInput | BookingReviewWhereInput[]
    OR?: BookingReviewWhereInput[]
    NOT?: BookingReviewWhereInput | BookingReviewWhereInput[]
    rating?: IntFilter<"BookingReview"> | number
    comment?: StringFilter<"BookingReview"> | string
    createdAt?: DateTimeFilter<"BookingReview"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId">

  export type BookingReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    bookingId?: SortOrder
    _count?: BookingReviewCountOrderByAggregateInput
    _avg?: BookingReviewAvgOrderByAggregateInput
    _max?: BookingReviewMaxOrderByAggregateInput
    _min?: BookingReviewMinOrderByAggregateInput
    _sum?: BookingReviewSumOrderByAggregateInput
  }

  export type BookingReviewScalarWhereWithAggregatesInput = {
    AND?: BookingReviewScalarWhereWithAggregatesInput | BookingReviewScalarWhereWithAggregatesInput[]
    OR?: BookingReviewScalarWhereWithAggregatesInput[]
    NOT?: BookingReviewScalarWhereWithAggregatesInput | BookingReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingReview"> | number
    rating?: IntWithAggregatesFilter<"BookingReview"> | number
    comment?: StringWithAggregatesFilter<"BookingReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookingReview"> | Date | string
    bookingId?: IntWithAggregatesFilter<"BookingReview"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    txRef?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    chapaTransactionRef?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    bookingId?: IntFilter<"Payment"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    txRef?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    chapaTransactionRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    txRef?: string
    bookingId?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    chapaTransactionRef?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "txRef" | "bookingId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    txRef?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    chapaTransactionRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    txRef?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    chapaTransactionRef?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    bookingId?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type UserCreateInput = {
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutUserInput
    mentor?: MentorCreateNestedOneWithoutUserInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    userPermissions?: UserUserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    mentor?: MentorUncheckedCreateNestedOneWithoutUserInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    userPermissions?: UserUserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutUserNestedInput
    mentor?: MentorUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    userPermissions?: UserUserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    mentor?: MentorUncheckedUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    userPermissions?: UserUserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupCreateInput = {
    groupId: number
    user: UserCreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroupUncheckedCreateInput = {
    id?: number
    userId: number
    groupId: number
  }

  export type UserGroupUpdateInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserGroupCreateManyInput = {
    id?: number
    userId: number
    groupId: number
  }

  export type UserGroupUpdateManyMutationInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUserPermissionCreateInput = {
    permissionId: number
    User: UserCreateNestedOneWithoutUserPermissionsInput
  }

  export type UserUserPermissionUncheckedCreateInput = {
    id?: number
    userId: number
    permissionId: number
  }

  export type UserUserPermissionUpdateInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutUserPermissionsNestedInput
  }

  export type UserUserPermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUserPermissionCreateManyInput = {
    id?: number
    userId: number
    permissionId: number
  }

  export type UserUserPermissionUpdateManyMutationInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUserPermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type ClientCreateInput = {
    interests: string
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientInput
    booking?: BookingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    interests: string
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    booking?: BookingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientNestedInput
    booking?: BookingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    booking?: BookingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    interests: string
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ClientUpdateManyMutationInput = {
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    mentorCategories?: MentorCategoryCreateNestedManyWithoutCategoryInput
    mentor?: MentorCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    mentorId?: number | null
    mentorCategories?: MentorCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorCategories?: MentorCategoryUpdateManyWithoutCategoryNestedInput
    mentor?: MentorUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorId?: NullableIntFieldUpdateOperationsInput | number | null
    mentorCategories?: MentorCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    mentorId?: number | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MentorCreateInput = {
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMentorInput
    mentorCategories?: MentorCategoryCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityCreateNestedManyWithoutMentorInput
    booking?: BookingCreateNestedManyWithoutMentorInput
    categories?: CategoryCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateInput = {
    id?: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    mentorCategories?: MentorCategoryUncheckedCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityUncheckedCreateNestedManyWithoutMentorInput
    booking?: BookingUncheckedCreateNestedManyWithoutMentorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorUpdateInput = {
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentorNestedInput
    mentorCategories?: MentorCategoryUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUpdateManyWithoutMentorNestedInput
    booking?: BookingUpdateManyWithoutMentorNestedInput
    categories?: CategoryUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    mentorCategories?: MentorCategoryUncheckedUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUncheckedUpdateManyWithoutMentorNestedInput
    booking?: BookingUncheckedUpdateManyWithoutMentorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorCreateManyInput = {
    id?: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type MentorUpdateManyMutationInput = {
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorCategoryCreateInput = {
    category: CategoryCreateNestedOneWithoutMentorCategoriesInput
    mentor: MentorCreateNestedOneWithoutMentorCategoriesInput
  }

  export type MentorCategoryUncheckedCreateInput = {
    id?: number
    mentorId: number
    categoryId: number
  }

  export type MentorCategoryUpdateInput = {
    category?: CategoryUpdateOneRequiredWithoutMentorCategoriesNestedInput
    mentor?: MentorUpdateOneRequiredWithoutMentorCategoriesNestedInput
  }

  export type MentorCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorCategoryCreateManyInput = {
    id?: number
    mentorId: number
    categoryId: number
  }

  export type MentorCategoryUpdateManyMutationInput = {

  }

  export type MentorCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorAvailabilityCreateInput = {
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isAvailable: boolean
    mentor: MentorCreateNestedOneWithoutAvailabilitiesInput
  }

  export type MentorAvailabilityUncheckedCreateInput = {
    id?: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isAvailable: boolean
    mentorId: number
  }

  export type MentorAvailabilityUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    mentor?: MentorUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type MentorAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorAvailabilityCreateManyInput = {
    id?: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isAvailable: boolean
    mentorId: number
  }

  export type MentorAvailabilityUpdateManyMutationInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MentorAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutBookingInput
    mentor: MentorCreateNestedOneWithoutBookingInput
    review?: BookingReviewCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    mentorId: number
    review?: BookingReviewUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutBookingNestedInput
    mentor?: MentorUpdateOneRequiredWithoutBookingNestedInput
    review?: BookingReviewUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    review?: BookingReviewUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    mentorId: number
  }

  export type BookingUpdateManyMutationInput = {
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingReviewCreateInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
  }

  export type BookingReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment: string
    createdAt?: Date | string
    bookingId: number
  }

  export type BookingReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type BookingReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingReviewCreateManyInput = {
    id?: number
    rating: number
    comment: string
    createdAt?: Date | string
    bookingId: number
  }

  export type BookingReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    txRef: string
    amount: number
    currency: string
    status: string
    chapaTransactionRef: string
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    txRef: string
    amount: number
    currency: string
    status: string
    chapaTransactionRef: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: number
  }

  export type PaymentUpdateInput = {
    txRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    chapaTransactionRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    txRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    chapaTransactionRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyInput = {
    id?: number
    txRef: string
    amount: number
    currency: string
    status: string
    chapaTransactionRef: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: number
  }

  export type PaymentUpdateManyMutationInput = {
    txRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    chapaTransactionRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    txRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    chapaTransactionRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type MentorNullableScalarRelationFilter = {
    is?: MentorWhereInput | null
    isNot?: MentorWhereInput | null
  }

  export type UserGroupListRelationFilter = {
    every?: UserGroupWhereInput
    some?: UserGroupWhereInput
    none?: UserGroupWhereInput
  }

  export type UserUserPermissionListRelationFilter = {
    every?: UserUserPermissionWhereInput
    some?: UserUserPermissionWhereInput
    none?: UserUserPermissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserUserPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrder
    isSuperuser?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isStaff?: SortOrder
    isActive?: SortOrder
    dateJoined?: SortOrder
    userType?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrder
    isSuperuser?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isStaff?: SortOrder
    isActive?: SortOrder
    dateJoined?: SortOrder
    userType?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrder
    isSuperuser?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isStaff?: SortOrder
    isActive?: SortOrder
    dateJoined?: SortOrder
    userType?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserGroupUserIdGroupIdCompoundUniqueInput = {
    userId: number
    groupId: number
  }

  export type UserGroupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UserGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UserGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UserGroupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UserGroupSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UserUserPermissionUserIdPermissionIdCompoundUniqueInput = {
    userId: number
    permissionId: number
  }

  export type UserUserPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserUserPermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserUserPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserUserPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserUserPermissionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissionId?: SortOrder
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelevanceInput = {
    fields: ClientOrderByRelevanceFieldEnum | ClientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    interests?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    totalSessions?: SortOrder
    userId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    interests?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    interests?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    totalSessions?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MentorCategoryListRelationFilter = {
    every?: MentorCategoryWhereInput
    some?: MentorCategoryWhereInput
    none?: MentorCategoryWhereInput
  }

  export type MentorCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    mentorId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    mentorId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    mentorId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MentorAvailabilityListRelationFilter = {
    every?: MentorAvailabilityWhereInput
    some?: MentorAvailabilityWhereInput
    none?: MentorAvailabilityWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type MentorAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorOrderByRelevanceInput = {
    fields: MentorOrderByRelevanceFieldEnum | MentorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MentorCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    pricePerMinute?: SortOrder
    isAvailable?: SortOrder
    rating?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MentorAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerMinute?: SortOrder
    rating?: SortOrder
    totalSessions?: SortOrder
    userId?: SortOrder
  }

  export type MentorMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    pricePerMinute?: SortOrder
    isAvailable?: SortOrder
    rating?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MentorMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    pricePerMinute?: SortOrder
    isAvailable?: SortOrder
    rating?: SortOrder
    totalSessions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MentorSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerMinute?: SortOrder
    rating?: SortOrder
    totalSessions?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type MentorScalarRelationFilter = {
    is?: MentorWhereInput
    isNot?: MentorWhereInput
  }

  export type MentorCategoryMentorIdCategoryIdCompoundUniqueInput = {
    mentorId: number
    categoryId: number
  }

  export type MentorCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    categoryId?: SortOrder
  }

  export type MentorCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    categoryId?: SortOrder
  }

  export type MentorCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    categoryId?: SortOrder
  }

  export type MentorCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    categoryId?: SortOrder
  }

  export type MentorCategorySumOrderByAggregateInput = {
    id?: SortOrder
    mentorId?: SortOrder
    categoryId?: SortOrder
  }

  export type MentorAvailabilityMentorIdDayOfWeekStartTimeEndTimeCompoundUniqueInput = {
    mentorId: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
  }

  export type MentorAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    mentorId?: SortOrder
  }

  export type MentorAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    mentorId?: SortOrder
  }

  export type MentorAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    mentorId?: SortOrder
  }

  export type MentorAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    mentorId?: SortOrder
  }

  export type MentorAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    mentorId?: SortOrder
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type BookingReviewNullableScalarRelationFilter = {
    is?: BookingReviewWhereInput | null
    isNot?: BookingReviewWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    amountPaid?: SortOrder
    platformFee?: SortOrder
    mentorPayout?: SortOrder
    paymentStatus?: SortOrder
    callLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    mentorId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
    amountPaid?: SortOrder
    platformFee?: SortOrder
    mentorPayout?: SortOrder
    clientId?: SortOrder
    mentorId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    amountPaid?: SortOrder
    platformFee?: SortOrder
    mentorPayout?: SortOrder
    paymentStatus?: SortOrder
    callLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    mentorId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    amountPaid?: SortOrder
    platformFee?: SortOrder
    mentorPayout?: SortOrder
    paymentStatus?: SortOrder
    callLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    mentorId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
    amountPaid?: SortOrder
    platformFee?: SortOrder
    mentorPayout?: SortOrder
    clientId?: SortOrder
    mentorId?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingReviewOrderByRelevanceInput = {
    fields: BookingReviewOrderByRelevanceFieldEnum | BookingReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    txRef?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    chapaTransactionRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    txRef?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    chapaTransactionRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    txRef?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    chapaTransactionRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    bookingId?: SortOrder
  }

  export type ClientCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    connect?: ClientWhereUniqueInput
  }

  export type MentorCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    connect?: MentorWhereUniqueInput
  }

  export type UserGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type UserUserPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserUserPermissionCreateWithoutUserInput, UserUserPermissionUncheckedCreateWithoutUserInput> | UserUserPermissionCreateWithoutUserInput[] | UserUserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUserPermissionCreateOrConnectWithoutUserInput | UserUserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserUserPermissionCreateManyUserInputEnvelope
    connect?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    connect?: ClientWhereUniqueInput
  }

  export type MentorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    connect?: MentorWhereUniqueInput
  }

  export type UserGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type UserUserPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserUserPermissionCreateWithoutUserInput, UserUserPermissionUncheckedCreateWithoutUserInput> | UserUserPermissionCreateWithoutUserInput[] | UserUserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUserPermissionCreateOrConnectWithoutUserInput | UserUserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserUserPermissionCreateManyUserInputEnvelope
    connect?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type ClientUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    upsert?: ClientUpsertWithoutUserInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUserInput, ClientUpdateWithoutUserInput>, ClientUncheckedUpdateWithoutUserInput>
  }

  export type MentorUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    upsert?: MentorUpsertWithoutUserInput
    disconnect?: MentorWhereInput | boolean
    delete?: MentorWhereInput | boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutUserInput, MentorUpdateWithoutUserInput>, MentorUncheckedUpdateWithoutUserInput>
  }

  export type UserGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutUserInput | UserGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutUserInput | UserGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutUserInput | UserGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type UserUserPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserUserPermissionCreateWithoutUserInput, UserUserPermissionUncheckedCreateWithoutUserInput> | UserUserPermissionCreateWithoutUserInput[] | UserUserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUserPermissionCreateOrConnectWithoutUserInput | UserUserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserUserPermissionUpsertWithWhereUniqueWithoutUserInput | UserUserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserUserPermissionCreateManyUserInputEnvelope
    set?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    disconnect?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    delete?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    connect?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    update?: UserUserPermissionUpdateWithWhereUniqueWithoutUserInput | UserUserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserUserPermissionUpdateManyWithWhereWithoutUserInput | UserUserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserUserPermissionScalarWhereInput | UserUserPermissionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    upsert?: ClientUpsertWithoutUserInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUserInput, ClientUpdateWithoutUserInput>, ClientUncheckedUpdateWithoutUserInput>
  }

  export type MentorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    upsert?: MentorUpsertWithoutUserInput
    disconnect?: MentorWhereInput | boolean
    delete?: MentorWhereInput | boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutUserInput, MentorUpdateWithoutUserInput>, MentorUncheckedUpdateWithoutUserInput>
  }

  export type UserGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutUserInput | UserGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutUserInput | UserGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutUserInput | UserGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type UserUserPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserUserPermissionCreateWithoutUserInput, UserUserPermissionUncheckedCreateWithoutUserInput> | UserUserPermissionCreateWithoutUserInput[] | UserUserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUserPermissionCreateOrConnectWithoutUserInput | UserUserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserUserPermissionUpsertWithWhereUniqueWithoutUserInput | UserUserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserUserPermissionCreateManyUserInputEnvelope
    set?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    disconnect?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    delete?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    connect?: UserUserPermissionWhereUniqueInput | UserUserPermissionWhereUniqueInput[]
    update?: UserUserPermissionUpdateWithWhereUniqueWithoutUserInput | UserUserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserUserPermissionUpdateManyWithWhereWithoutUserInput | UserUserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserUserPermissionScalarWhereInput | UserUserPermissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGroupsInput
    upsert?: UserUpsertWithoutUserGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGroupsInput, UserUpdateWithoutUserGroupsInput>, UserUncheckedUpdateWithoutUserGroupsInput>
  }

  export type UserCreateNestedOneWithoutUserPermissionsInput = {
    create?: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionsInput
    upsert?: UserUpsertWithoutUserPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPermissionsInput, UserUpdateWithoutUserPermissionsInput>, UserUncheckedUpdateWithoutUserPermissionsInput>
  }

  export type UserCreateNestedOneWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutClientInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    upsert?: UserUpsertWithoutClientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientInput, UserUpdateWithoutClientInput>, UserUncheckedUpdateWithoutClientInput>
  }

  export type BookingUpdateManyWithoutClientNestedInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClientInput | BookingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClientInput | BookingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClientInput | BookingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClientInput | BookingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClientInput | BookingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClientInput | BookingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type MentorCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MentorCategoryCreateWithoutCategoryInput, MentorCategoryUncheckedCreateWithoutCategoryInput> | MentorCategoryCreateWithoutCategoryInput[] | MentorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutCategoryInput | MentorCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: MentorCategoryCreateManyCategoryInputEnvelope
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
  }

  export type MentorCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<MentorCreateWithoutCategoriesInput, MentorUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MentorCreateOrConnectWithoutCategoriesInput
    connect?: MentorWhereUniqueInput
  }

  export type MentorCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MentorCategoryCreateWithoutCategoryInput, MentorCategoryUncheckedCreateWithoutCategoryInput> | MentorCategoryCreateWithoutCategoryInput[] | MentorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutCategoryInput | MentorCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: MentorCategoryCreateManyCategoryInputEnvelope
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
  }

  export type MentorCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MentorCategoryCreateWithoutCategoryInput, MentorCategoryUncheckedCreateWithoutCategoryInput> | MentorCategoryCreateWithoutCategoryInput[] | MentorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutCategoryInput | MentorCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: MentorCategoryUpsertWithWhereUniqueWithoutCategoryInput | MentorCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MentorCategoryCreateManyCategoryInputEnvelope
    set?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    disconnect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    delete?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    update?: MentorCategoryUpdateWithWhereUniqueWithoutCategoryInput | MentorCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MentorCategoryUpdateManyWithWhereWithoutCategoryInput | MentorCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MentorCategoryScalarWhereInput | MentorCategoryScalarWhereInput[]
  }

  export type MentorUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<MentorCreateWithoutCategoriesInput, MentorUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MentorCreateOrConnectWithoutCategoriesInput
    upsert?: MentorUpsertWithoutCategoriesInput
    disconnect?: MentorWhereInput | boolean
    delete?: MentorWhereInput | boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutCategoriesInput, MentorUpdateWithoutCategoriesInput>, MentorUncheckedUpdateWithoutCategoriesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MentorCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MentorCategoryCreateWithoutCategoryInput, MentorCategoryUncheckedCreateWithoutCategoryInput> | MentorCategoryCreateWithoutCategoryInput[] | MentorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutCategoryInput | MentorCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: MentorCategoryUpsertWithWhereUniqueWithoutCategoryInput | MentorCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MentorCategoryCreateManyCategoryInputEnvelope
    set?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    disconnect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    delete?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    update?: MentorCategoryUpdateWithWhereUniqueWithoutCategoryInput | MentorCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MentorCategoryUpdateManyWithWhereWithoutCategoryInput | MentorCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MentorCategoryScalarWhereInput | MentorCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMentorInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput
    connect?: UserWhereUniqueInput
  }

  export type MentorCategoryCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorCategoryCreateWithoutMentorInput, MentorCategoryUncheckedCreateWithoutMentorInput> | MentorCategoryCreateWithoutMentorInput[] | MentorCategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutMentorInput | MentorCategoryCreateOrConnectWithoutMentorInput[]
    createMany?: MentorCategoryCreateManyMentorInputEnvelope
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
  }

  export type MentorAvailabilityCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorAvailabilityCreateWithoutMentorInput, MentorAvailabilityUncheckedCreateWithoutMentorInput> | MentorAvailabilityCreateWithoutMentorInput[] | MentorAvailabilityUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorAvailabilityCreateOrConnectWithoutMentorInput | MentorAvailabilityCreateOrConnectWithoutMentorInput[]
    createMany?: MentorAvailabilityCreateManyMentorInputEnvelope
    connect?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutMentorInput = {
    create?: XOR<BookingCreateWithoutMentorInput, BookingUncheckedCreateWithoutMentorInput> | BookingCreateWithoutMentorInput[] | BookingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMentorInput | BookingCreateOrConnectWithoutMentorInput[]
    createMany?: BookingCreateManyMentorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutMentorInput = {
    create?: XOR<CategoryCreateWithoutMentorInput, CategoryUncheckedCreateWithoutMentorInput> | CategoryCreateWithoutMentorInput[] | CategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMentorInput | CategoryCreateOrConnectWithoutMentorInput[]
    createMany?: CategoryCreateManyMentorInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MentorCategoryUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorCategoryCreateWithoutMentorInput, MentorCategoryUncheckedCreateWithoutMentorInput> | MentorCategoryCreateWithoutMentorInput[] | MentorCategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutMentorInput | MentorCategoryCreateOrConnectWithoutMentorInput[]
    createMany?: MentorCategoryCreateManyMentorInputEnvelope
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
  }

  export type MentorAvailabilityUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorAvailabilityCreateWithoutMentorInput, MentorAvailabilityUncheckedCreateWithoutMentorInput> | MentorAvailabilityCreateWithoutMentorInput[] | MentorAvailabilityUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorAvailabilityCreateOrConnectWithoutMentorInput | MentorAvailabilityCreateOrConnectWithoutMentorInput[]
    createMany?: MentorAvailabilityCreateManyMentorInputEnvelope
    connect?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<BookingCreateWithoutMentorInput, BookingUncheckedCreateWithoutMentorInput> | BookingCreateWithoutMentorInput[] | BookingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMentorInput | BookingCreateOrConnectWithoutMentorInput[]
    createMany?: BookingCreateManyMentorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<CategoryCreateWithoutMentorInput, CategoryUncheckedCreateWithoutMentorInput> | CategoryCreateWithoutMentorInput[] | CategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMentorInput | CategoryCreateOrConnectWithoutMentorInput[]
    createMany?: CategoryCreateManyMentorInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMentorNestedInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput
    upsert?: UserUpsertWithoutMentorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorInput, UserUpdateWithoutMentorInput>, UserUncheckedUpdateWithoutMentorInput>
  }

  export type MentorCategoryUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorCategoryCreateWithoutMentorInput, MentorCategoryUncheckedCreateWithoutMentorInput> | MentorCategoryCreateWithoutMentorInput[] | MentorCategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutMentorInput | MentorCategoryCreateOrConnectWithoutMentorInput[]
    upsert?: MentorCategoryUpsertWithWhereUniqueWithoutMentorInput | MentorCategoryUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorCategoryCreateManyMentorInputEnvelope
    set?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    disconnect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    delete?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    update?: MentorCategoryUpdateWithWhereUniqueWithoutMentorInput | MentorCategoryUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorCategoryUpdateManyWithWhereWithoutMentorInput | MentorCategoryUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorCategoryScalarWhereInput | MentorCategoryScalarWhereInput[]
  }

  export type MentorAvailabilityUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorAvailabilityCreateWithoutMentorInput, MentorAvailabilityUncheckedCreateWithoutMentorInput> | MentorAvailabilityCreateWithoutMentorInput[] | MentorAvailabilityUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorAvailabilityCreateOrConnectWithoutMentorInput | MentorAvailabilityCreateOrConnectWithoutMentorInput[]
    upsert?: MentorAvailabilityUpsertWithWhereUniqueWithoutMentorInput | MentorAvailabilityUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorAvailabilityCreateManyMentorInputEnvelope
    set?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    disconnect?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    delete?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    connect?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    update?: MentorAvailabilityUpdateWithWhereUniqueWithoutMentorInput | MentorAvailabilityUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorAvailabilityUpdateManyWithWhereWithoutMentorInput | MentorAvailabilityUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorAvailabilityScalarWhereInput | MentorAvailabilityScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutMentorNestedInput = {
    create?: XOR<BookingCreateWithoutMentorInput, BookingUncheckedCreateWithoutMentorInput> | BookingCreateWithoutMentorInput[] | BookingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMentorInput | BookingCreateOrConnectWithoutMentorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutMentorInput | BookingUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: BookingCreateManyMentorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutMentorInput | BookingUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutMentorInput | BookingUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutMentorNestedInput = {
    create?: XOR<CategoryCreateWithoutMentorInput, CategoryUncheckedCreateWithoutMentorInput> | CategoryCreateWithoutMentorInput[] | CategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMentorInput | CategoryCreateOrConnectWithoutMentorInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMentorInput | CategoryUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: CategoryCreateManyMentorInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMentorInput | CategoryUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMentorInput | CategoryUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MentorCategoryUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorCategoryCreateWithoutMentorInput, MentorCategoryUncheckedCreateWithoutMentorInput> | MentorCategoryCreateWithoutMentorInput[] | MentorCategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorCategoryCreateOrConnectWithoutMentorInput | MentorCategoryCreateOrConnectWithoutMentorInput[]
    upsert?: MentorCategoryUpsertWithWhereUniqueWithoutMentorInput | MentorCategoryUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorCategoryCreateManyMentorInputEnvelope
    set?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    disconnect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    delete?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    connect?: MentorCategoryWhereUniqueInput | MentorCategoryWhereUniqueInput[]
    update?: MentorCategoryUpdateWithWhereUniqueWithoutMentorInput | MentorCategoryUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorCategoryUpdateManyWithWhereWithoutMentorInput | MentorCategoryUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorCategoryScalarWhereInput | MentorCategoryScalarWhereInput[]
  }

  export type MentorAvailabilityUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorAvailabilityCreateWithoutMentorInput, MentorAvailabilityUncheckedCreateWithoutMentorInput> | MentorAvailabilityCreateWithoutMentorInput[] | MentorAvailabilityUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorAvailabilityCreateOrConnectWithoutMentorInput | MentorAvailabilityCreateOrConnectWithoutMentorInput[]
    upsert?: MentorAvailabilityUpsertWithWhereUniqueWithoutMentorInput | MentorAvailabilityUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorAvailabilityCreateManyMentorInputEnvelope
    set?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    disconnect?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    delete?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    connect?: MentorAvailabilityWhereUniqueInput | MentorAvailabilityWhereUniqueInput[]
    update?: MentorAvailabilityUpdateWithWhereUniqueWithoutMentorInput | MentorAvailabilityUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorAvailabilityUpdateManyWithWhereWithoutMentorInput | MentorAvailabilityUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorAvailabilityScalarWhereInput | MentorAvailabilityScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<BookingCreateWithoutMentorInput, BookingUncheckedCreateWithoutMentorInput> | BookingCreateWithoutMentorInput[] | BookingUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutMentorInput | BookingCreateOrConnectWithoutMentorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutMentorInput | BookingUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: BookingCreateManyMentorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutMentorInput | BookingUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutMentorInput | BookingUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<CategoryCreateWithoutMentorInput, CategoryUncheckedCreateWithoutMentorInput> | CategoryCreateWithoutMentorInput[] | CategoryUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutMentorInput | CategoryCreateOrConnectWithoutMentorInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutMentorInput | CategoryUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: CategoryCreateManyMentorInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutMentorInput | CategoryUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutMentorInput | CategoryUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutMentorCategoriesInput = {
    create?: XOR<CategoryCreateWithoutMentorCategoriesInput, CategoryUncheckedCreateWithoutMentorCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMentorCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type MentorCreateNestedOneWithoutMentorCategoriesInput = {
    create?: XOR<MentorCreateWithoutMentorCategoriesInput, MentorUncheckedCreateWithoutMentorCategoriesInput>
    connectOrCreate?: MentorCreateOrConnectWithoutMentorCategoriesInput
    connect?: MentorWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutMentorCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutMentorCategoriesInput, CategoryUncheckedCreateWithoutMentorCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMentorCategoriesInput
    upsert?: CategoryUpsertWithoutMentorCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMentorCategoriesInput, CategoryUpdateWithoutMentorCategoriesInput>, CategoryUncheckedUpdateWithoutMentorCategoriesInput>
  }

  export type MentorUpdateOneRequiredWithoutMentorCategoriesNestedInput = {
    create?: XOR<MentorCreateWithoutMentorCategoriesInput, MentorUncheckedCreateWithoutMentorCategoriesInput>
    connectOrCreate?: MentorCreateOrConnectWithoutMentorCategoriesInput
    upsert?: MentorUpsertWithoutMentorCategoriesInput
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutMentorCategoriesInput, MentorUpdateWithoutMentorCategoriesInput>, MentorUncheckedUpdateWithoutMentorCategoriesInput>
  }

  export type MentorCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<MentorCreateWithoutAvailabilitiesInput, MentorUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: MentorCreateOrConnectWithoutAvailabilitiesInput
    connect?: MentorWhereUniqueInput
  }

  export type MentorUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<MentorCreateWithoutAvailabilitiesInput, MentorUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: MentorCreateOrConnectWithoutAvailabilitiesInput
    upsert?: MentorUpsertWithoutAvailabilitiesInput
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutAvailabilitiesInput, MentorUpdateWithoutAvailabilitiesInput>, MentorUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ClientCreateNestedOneWithoutBookingInput = {
    create?: XOR<ClientCreateWithoutBookingInput, ClientUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBookingInput
    connect?: ClientWhereUniqueInput
  }

  export type MentorCreateNestedOneWithoutBookingInput = {
    create?: XOR<MentorCreateWithoutBookingInput, MentorUncheckedCreateWithoutBookingInput>
    connectOrCreate?: MentorCreateOrConnectWithoutBookingInput
    connect?: MentorWhereUniqueInput
  }

  export type BookingReviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<BookingReviewCreateWithoutBookingInput, BookingReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingReviewCreateOrConnectWithoutBookingInput
    connect?: BookingReviewWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type BookingReviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<BookingReviewCreateWithoutBookingInput, BookingReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingReviewCreateOrConnectWithoutBookingInput
    connect?: BookingReviewWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<ClientCreateWithoutBookingInput, ClientUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBookingInput
    upsert?: ClientUpsertWithoutBookingInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutBookingInput, ClientUpdateWithoutBookingInput>, ClientUncheckedUpdateWithoutBookingInput>
  }

  export type MentorUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<MentorCreateWithoutBookingInput, MentorUncheckedCreateWithoutBookingInput>
    connectOrCreate?: MentorCreateOrConnectWithoutBookingInput
    upsert?: MentorUpsertWithoutBookingInput
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutBookingInput, MentorUpdateWithoutBookingInput>, MentorUncheckedUpdateWithoutBookingInput>
  }

  export type BookingReviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<BookingReviewCreateWithoutBookingInput, BookingReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingReviewCreateOrConnectWithoutBookingInput
    upsert?: BookingReviewUpsertWithoutBookingInput
    disconnect?: BookingReviewWhereInput | boolean
    delete?: BookingReviewWhereInput | boolean
    connect?: BookingReviewWhereUniqueInput
    update?: XOR<XOR<BookingReviewUpdateToOneWithWhereWithoutBookingInput, BookingReviewUpdateWithoutBookingInput>, BookingReviewUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type BookingReviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<BookingReviewCreateWithoutBookingInput, BookingReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingReviewCreateOrConnectWithoutBookingInput
    upsert?: BookingReviewUpsertWithoutBookingInput
    disconnect?: BookingReviewWhereInput | boolean
    delete?: BookingReviewWhereInput | boolean
    connect?: BookingReviewWhereUniqueInput
    update?: XOR<XOR<BookingReviewUpdateToOneWithWhereWithoutBookingInput, BookingReviewUpdateWithoutBookingInput>, BookingReviewUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClientCreateWithoutUserInput = {
    interests: string
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: number
    interests: string
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type MentorCreateWithoutUserInput = {
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorCategories?: MentorCategoryCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityCreateNestedManyWithoutMentorInput
    booking?: BookingCreateNestedManyWithoutMentorInput
    categories?: CategoryCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutUserInput = {
    id?: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorCategories?: MentorCategoryUncheckedCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityUncheckedCreateNestedManyWithoutMentorInput
    booking?: BookingUncheckedCreateNestedManyWithoutMentorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutUserInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
  }

  export type UserGroupCreateWithoutUserInput = {
    groupId: number
  }

  export type UserGroupUncheckedCreateWithoutUserInput = {
    id?: number
    groupId: number
  }

  export type UserGroupCreateOrConnectWithoutUserInput = {
    where: UserGroupWhereUniqueInput
    create: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput>
  }

  export type UserGroupCreateManyUserInputEnvelope = {
    data: UserGroupCreateManyUserInput | UserGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUserPermissionCreateWithoutUserInput = {
    permissionId: number
  }

  export type UserUserPermissionUncheckedCreateWithoutUserInput = {
    id?: number
    permissionId: number
  }

  export type UserUserPermissionCreateOrConnectWithoutUserInput = {
    where: UserUserPermissionWhereUniqueInput
    create: XOR<UserUserPermissionCreateWithoutUserInput, UserUserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserUserPermissionCreateManyUserInputEnvelope = {
    data: UserUserPermissionCreateManyUserInput | UserUserPermissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutUserInput = {
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateWithoutUserInput = {
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type MentorUpsertWithoutUserInput = {
    update: XOR<MentorUpdateWithoutUserInput, MentorUncheckedUpdateWithoutUserInput>
    create: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutUserInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutUserInput, MentorUncheckedUpdateWithoutUserInput>
  }

  export type MentorUpdateWithoutUserInput = {
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorCategories?: MentorCategoryUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUpdateManyWithoutMentorNestedInput
    booking?: BookingUpdateManyWithoutMentorNestedInput
    categories?: CategoryUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorCategories?: MentorCategoryUncheckedUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUncheckedUpdateManyWithoutMentorNestedInput
    booking?: BookingUncheckedUpdateManyWithoutMentorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type UserGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGroupWhereUniqueInput
    update: XOR<UserGroupUpdateWithoutUserInput, UserGroupUncheckedUpdateWithoutUserInput>
    create: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput>
  }

  export type UserGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGroupWhereUniqueInput
    data: XOR<UserGroupUpdateWithoutUserInput, UserGroupUncheckedUpdateWithoutUserInput>
  }

  export type UserGroupUpdateManyWithWhereWithoutUserInput = {
    where: UserGroupScalarWhereInput
    data: XOR<UserGroupUpdateManyMutationInput, UserGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGroupScalarWhereInput = {
    AND?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
    OR?: UserGroupScalarWhereInput[]
    NOT?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
    id?: IntFilter<"UserGroup"> | number
    userId?: IntFilter<"UserGroup"> | number
    groupId?: IntFilter<"UserGroup"> | number
  }

  export type UserUserPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserUserPermissionWhereUniqueInput
    update: XOR<UserUserPermissionUpdateWithoutUserInput, UserUserPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<UserUserPermissionCreateWithoutUserInput, UserUserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserUserPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserUserPermissionWhereUniqueInput
    data: XOR<UserUserPermissionUpdateWithoutUserInput, UserUserPermissionUncheckedUpdateWithoutUserInput>
  }

  export type UserUserPermissionUpdateManyWithWhereWithoutUserInput = {
    where: UserUserPermissionScalarWhereInput
    data: XOR<UserUserPermissionUpdateManyMutationInput, UserUserPermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserUserPermissionScalarWhereInput = {
    AND?: UserUserPermissionScalarWhereInput | UserUserPermissionScalarWhereInput[]
    OR?: UserUserPermissionScalarWhereInput[]
    NOT?: UserUserPermissionScalarWhereInput | UserUserPermissionScalarWhereInput[]
    id?: IntFilter<"UserUserPermission"> | number
    userId?: IntFilter<"UserUserPermission"> | number
    permissionId?: IntFilter<"UserUserPermission"> | number
  }

  export type UserCreateWithoutUserGroupsInput = {
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutUserInput
    mentor?: MentorCreateNestedOneWithoutUserInput
    userPermissions?: UserUserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGroupsInput = {
    id?: number
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    mentor?: MentorUncheckedCreateNestedOneWithoutUserInput
    userPermissions?: UserUserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
  }

  export type UserUpsertWithoutUserGroupsInput = {
    update: XOR<UserUpdateWithoutUserGroupsInput, UserUncheckedUpdateWithoutUserGroupsInput>
    create: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGroupsInput, UserUncheckedUpdateWithoutUserGroupsInput>
  }

  export type UserUpdateWithoutUserGroupsInput = {
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutUserNestedInput
    mentor?: MentorUpdateOneWithoutUserNestedInput
    userPermissions?: UserUserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    mentor?: MentorUncheckedUpdateOneWithoutUserNestedInput
    userPermissions?: UserUserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserPermissionsInput = {
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutUserInput
    mentor?: MentorCreateNestedOneWithoutUserInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPermissionsInput = {
    id?: number
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    mentor?: MentorUncheckedCreateNestedOneWithoutUserInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
  }

  export type UserUpsertWithoutUserPermissionsInput = {
    update: XOR<UserUpdateWithoutUserPermissionsInput, UserUncheckedUpdateWithoutUserPermissionsInput>
    create: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPermissionsInput, UserUncheckedUpdateWithoutUserPermissionsInput>
  }

  export type UserUpdateWithoutUserPermissionsInput = {
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutUserNestedInput
    mentor?: MentorUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    mentor?: MentorUncheckedUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutClientInput = {
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentor?: MentorCreateNestedOneWithoutUserInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    userPermissions?: UserUserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientInput = {
    id?: number
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mentor?: MentorUncheckedCreateNestedOneWithoutUserInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    userPermissions?: UserUserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type BookingCreateWithoutClientInput = {
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentor: MentorCreateNestedOneWithoutBookingInput
    review?: BookingReviewCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutClientInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorId: number
    review?: BookingReviewUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutClientInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput>
  }

  export type BookingCreateManyClientInputEnvelope = {
    data: BookingCreateManyClientInput | BookingCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientInput = {
    update: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
  }

  export type UserUpdateWithoutClientInput = {
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: MentorUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    userPermissions?: UserUserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: MentorUncheckedUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    userPermissions?: UserUserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutClientInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutClientInput, BookingUncheckedUpdateWithoutClientInput>
    create: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutClientInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutClientInput, BookingUncheckedUpdateWithoutClientInput>
  }

  export type BookingUpdateManyWithWhereWithoutClientInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutClientInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    sessionDate?: DateTimeFilter<"Booking"> | Date | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    durationMinutes?: IntFilter<"Booking"> | number
    callType?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    amountPaid?: FloatFilter<"Booking"> | number
    platformFee?: FloatFilter<"Booking"> | number
    mentorPayout?: FloatFilter<"Booking"> | number
    paymentStatus?: BoolFilter<"Booking"> | boolean
    callLink?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    clientId?: IntFilter<"Booking"> | number
    mentorId?: IntFilter<"Booking"> | number
  }

  export type MentorCategoryCreateWithoutCategoryInput = {
    mentor: MentorCreateNestedOneWithoutMentorCategoriesInput
  }

  export type MentorCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    mentorId: number
  }

  export type MentorCategoryCreateOrConnectWithoutCategoryInput = {
    where: MentorCategoryWhereUniqueInput
    create: XOR<MentorCategoryCreateWithoutCategoryInput, MentorCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type MentorCategoryCreateManyCategoryInputEnvelope = {
    data: MentorCategoryCreateManyCategoryInput | MentorCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MentorCreateWithoutCategoriesInput = {
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMentorInput
    mentorCategories?: MentorCategoryCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityCreateNestedManyWithoutMentorInput
    booking?: BookingCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutCategoriesInput = {
    id?: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    mentorCategories?: MentorCategoryUncheckedCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityUncheckedCreateNestedManyWithoutMentorInput
    booking?: BookingUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutCategoriesInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutCategoriesInput, MentorUncheckedCreateWithoutCategoriesInput>
  }

  export type MentorCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MentorCategoryWhereUniqueInput
    update: XOR<MentorCategoryUpdateWithoutCategoryInput, MentorCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<MentorCategoryCreateWithoutCategoryInput, MentorCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type MentorCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MentorCategoryWhereUniqueInput
    data: XOR<MentorCategoryUpdateWithoutCategoryInput, MentorCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type MentorCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: MentorCategoryScalarWhereInput
    data: XOR<MentorCategoryUpdateManyMutationInput, MentorCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MentorCategoryScalarWhereInput = {
    AND?: MentorCategoryScalarWhereInput | MentorCategoryScalarWhereInput[]
    OR?: MentorCategoryScalarWhereInput[]
    NOT?: MentorCategoryScalarWhereInput | MentorCategoryScalarWhereInput[]
    id?: IntFilter<"MentorCategory"> | number
    mentorId?: IntFilter<"MentorCategory"> | number
    categoryId?: IntFilter<"MentorCategory"> | number
  }

  export type MentorUpsertWithoutCategoriesInput = {
    update: XOR<MentorUpdateWithoutCategoriesInput, MentorUncheckedUpdateWithoutCategoriesInput>
    create: XOR<MentorCreateWithoutCategoriesInput, MentorUncheckedCreateWithoutCategoriesInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutCategoriesInput, MentorUncheckedUpdateWithoutCategoriesInput>
  }

  export type MentorUpdateWithoutCategoriesInput = {
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentorNestedInput
    mentorCategories?: MentorCategoryUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUpdateManyWithoutMentorNestedInput
    booking?: BookingUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    mentorCategories?: MentorCategoryUncheckedUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUncheckedUpdateManyWithoutMentorNestedInput
    booking?: BookingUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type UserCreateWithoutMentorInput = {
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutUserInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    userPermissions?: UserUserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMentorInput = {
    id?: number
    password: string
    lastLogin?: Date | string | null
    isSuperuser?: boolean
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    isStaff?: boolean
    isActive?: boolean
    dateJoined?: Date | string
    userType?: $Enums.UserType
    phoneNumber?: string | null
    profilePicture?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    userPermissions?: UserUserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMentorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
  }

  export type MentorCategoryCreateWithoutMentorInput = {
    category: CategoryCreateNestedOneWithoutMentorCategoriesInput
  }

  export type MentorCategoryUncheckedCreateWithoutMentorInput = {
    id?: number
    categoryId: number
  }

  export type MentorCategoryCreateOrConnectWithoutMentorInput = {
    where: MentorCategoryWhereUniqueInput
    create: XOR<MentorCategoryCreateWithoutMentorInput, MentorCategoryUncheckedCreateWithoutMentorInput>
  }

  export type MentorCategoryCreateManyMentorInputEnvelope = {
    data: MentorCategoryCreateManyMentorInput | MentorCategoryCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type MentorAvailabilityCreateWithoutMentorInput = {
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isAvailable: boolean
  }

  export type MentorAvailabilityUncheckedCreateWithoutMentorInput = {
    id?: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isAvailable: boolean
  }

  export type MentorAvailabilityCreateOrConnectWithoutMentorInput = {
    where: MentorAvailabilityWhereUniqueInput
    create: XOR<MentorAvailabilityCreateWithoutMentorInput, MentorAvailabilityUncheckedCreateWithoutMentorInput>
  }

  export type MentorAvailabilityCreateManyMentorInputEnvelope = {
    data: MentorAvailabilityCreateManyMentorInput | MentorAvailabilityCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutMentorInput = {
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutBookingInput
    review?: BookingReviewCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutMentorInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    review?: BookingReviewUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutMentorInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutMentorInput, BookingUncheckedCreateWithoutMentorInput>
  }

  export type BookingCreateManyMentorInputEnvelope = {
    data: BookingCreateManyMentorInput | BookingCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutMentorInput = {
    name: string
    description: string
    createdAt?: Date | string
    mentorCategories?: MentorCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMentorInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    mentorCategories?: MentorCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMentorInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMentorInput, CategoryUncheckedCreateWithoutMentorInput>
  }

  export type CategoryCreateManyMentorInputEnvelope = {
    data: CategoryCreateManyMentorInput | CategoryCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMentorInput = {
    update: XOR<UserUpdateWithoutMentorInput, UserUncheckedUpdateWithoutMentorInput>
    create: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorInput, UserUncheckedUpdateWithoutMentorInput>
  }

  export type UserUpdateWithoutMentorInput = {
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    userPermissions?: UserUserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    userPermissions?: UserUserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MentorCategoryUpsertWithWhereUniqueWithoutMentorInput = {
    where: MentorCategoryWhereUniqueInput
    update: XOR<MentorCategoryUpdateWithoutMentorInput, MentorCategoryUncheckedUpdateWithoutMentorInput>
    create: XOR<MentorCategoryCreateWithoutMentorInput, MentorCategoryUncheckedCreateWithoutMentorInput>
  }

  export type MentorCategoryUpdateWithWhereUniqueWithoutMentorInput = {
    where: MentorCategoryWhereUniqueInput
    data: XOR<MentorCategoryUpdateWithoutMentorInput, MentorCategoryUncheckedUpdateWithoutMentorInput>
  }

  export type MentorCategoryUpdateManyWithWhereWithoutMentorInput = {
    where: MentorCategoryScalarWhereInput
    data: XOR<MentorCategoryUpdateManyMutationInput, MentorCategoryUncheckedUpdateManyWithoutMentorInput>
  }

  export type MentorAvailabilityUpsertWithWhereUniqueWithoutMentorInput = {
    where: MentorAvailabilityWhereUniqueInput
    update: XOR<MentorAvailabilityUpdateWithoutMentorInput, MentorAvailabilityUncheckedUpdateWithoutMentorInput>
    create: XOR<MentorAvailabilityCreateWithoutMentorInput, MentorAvailabilityUncheckedCreateWithoutMentorInput>
  }

  export type MentorAvailabilityUpdateWithWhereUniqueWithoutMentorInput = {
    where: MentorAvailabilityWhereUniqueInput
    data: XOR<MentorAvailabilityUpdateWithoutMentorInput, MentorAvailabilityUncheckedUpdateWithoutMentorInput>
  }

  export type MentorAvailabilityUpdateManyWithWhereWithoutMentorInput = {
    where: MentorAvailabilityScalarWhereInput
    data: XOR<MentorAvailabilityUpdateManyMutationInput, MentorAvailabilityUncheckedUpdateManyWithoutMentorInput>
  }

  export type MentorAvailabilityScalarWhereInput = {
    AND?: MentorAvailabilityScalarWhereInput | MentorAvailabilityScalarWhereInput[]
    OR?: MentorAvailabilityScalarWhereInput[]
    NOT?: MentorAvailabilityScalarWhereInput | MentorAvailabilityScalarWhereInput[]
    id?: IntFilter<"MentorAvailability"> | number
    dayOfWeek?: IntFilter<"MentorAvailability"> | number
    startTime?: DateTimeFilter<"MentorAvailability"> | Date | string
    endTime?: DateTimeFilter<"MentorAvailability"> | Date | string
    isAvailable?: BoolFilter<"MentorAvailability"> | boolean
    mentorId?: IntFilter<"MentorAvailability"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutMentorInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutMentorInput, BookingUncheckedUpdateWithoutMentorInput>
    create: XOR<BookingCreateWithoutMentorInput, BookingUncheckedCreateWithoutMentorInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutMentorInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutMentorInput, BookingUncheckedUpdateWithoutMentorInput>
  }

  export type BookingUpdateManyWithWhereWithoutMentorInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutMentorInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutMentorInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutMentorInput, CategoryUncheckedUpdateWithoutMentorInput>
    create: XOR<CategoryCreateWithoutMentorInput, CategoryUncheckedCreateWithoutMentorInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutMentorInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutMentorInput, CategoryUncheckedUpdateWithoutMentorInput>
  }

  export type CategoryUpdateManyWithWhereWithoutMentorInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutMentorInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    mentorId?: IntNullableFilter<"Category"> | number | null
  }

  export type CategoryCreateWithoutMentorCategoriesInput = {
    name: string
    description: string
    createdAt?: Date | string
    mentor?: MentorCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutMentorCategoriesInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    mentorId?: number | null
  }

  export type CategoryCreateOrConnectWithoutMentorCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMentorCategoriesInput, CategoryUncheckedCreateWithoutMentorCategoriesInput>
  }

  export type MentorCreateWithoutMentorCategoriesInput = {
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMentorInput
    availabilities?: MentorAvailabilityCreateNestedManyWithoutMentorInput
    booking?: BookingCreateNestedManyWithoutMentorInput
    categories?: CategoryCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutMentorCategoriesInput = {
    id?: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    availabilities?: MentorAvailabilityUncheckedCreateNestedManyWithoutMentorInput
    booking?: BookingUncheckedCreateNestedManyWithoutMentorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutMentorCategoriesInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutMentorCategoriesInput, MentorUncheckedCreateWithoutMentorCategoriesInput>
  }

  export type CategoryUpsertWithoutMentorCategoriesInput = {
    update: XOR<CategoryUpdateWithoutMentorCategoriesInput, CategoryUncheckedUpdateWithoutMentorCategoriesInput>
    create: XOR<CategoryCreateWithoutMentorCategoriesInput, CategoryUncheckedCreateWithoutMentorCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMentorCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMentorCategoriesInput, CategoryUncheckedUpdateWithoutMentorCategoriesInput>
  }

  export type CategoryUpdateWithoutMentorCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: MentorUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMentorCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MentorUpsertWithoutMentorCategoriesInput = {
    update: XOR<MentorUpdateWithoutMentorCategoriesInput, MentorUncheckedUpdateWithoutMentorCategoriesInput>
    create: XOR<MentorCreateWithoutMentorCategoriesInput, MentorUncheckedCreateWithoutMentorCategoriesInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutMentorCategoriesInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutMentorCategoriesInput, MentorUncheckedUpdateWithoutMentorCategoriesInput>
  }

  export type MentorUpdateWithoutMentorCategoriesInput = {
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUpdateManyWithoutMentorNestedInput
    booking?: BookingUpdateManyWithoutMentorNestedInput
    categories?: CategoryUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutMentorCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    availabilities?: MentorAvailabilityUncheckedUpdateManyWithoutMentorNestedInput
    booking?: BookingUncheckedUpdateManyWithoutMentorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorCreateWithoutAvailabilitiesInput = {
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMentorInput
    mentorCategories?: MentorCategoryCreateNestedManyWithoutMentorInput
    booking?: BookingCreateNestedManyWithoutMentorInput
    categories?: CategoryCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    mentorCategories?: MentorCategoryUncheckedCreateNestedManyWithoutMentorInput
    booking?: BookingUncheckedCreateNestedManyWithoutMentorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutAvailabilitiesInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutAvailabilitiesInput, MentorUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type MentorUpsertWithoutAvailabilitiesInput = {
    update: XOR<MentorUpdateWithoutAvailabilitiesInput, MentorUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<MentorCreateWithoutAvailabilitiesInput, MentorUncheckedCreateWithoutAvailabilitiesInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutAvailabilitiesInput, MentorUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type MentorUpdateWithoutAvailabilitiesInput = {
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentorNestedInput
    mentorCategories?: MentorCategoryUpdateManyWithoutMentorNestedInput
    booking?: BookingUpdateManyWithoutMentorNestedInput
    categories?: CategoryUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    mentorCategories?: MentorCategoryUncheckedUpdateManyWithoutMentorNestedInput
    booking?: BookingUncheckedUpdateManyWithoutMentorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type ClientCreateWithoutBookingInput = {
    interests: string
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutBookingInput = {
    id?: number
    interests: string
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ClientCreateOrConnectWithoutBookingInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBookingInput, ClientUncheckedCreateWithoutBookingInput>
  }

  export type MentorCreateWithoutBookingInput = {
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMentorInput
    mentorCategories?: MentorCategoryCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityCreateNestedManyWithoutMentorInput
    categories?: CategoryCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutBookingInput = {
    id?: number
    bio: string
    pricePerMinute: number
    isAvailable: boolean
    rating: number
    totalSessions: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    mentorCategories?: MentorCategoryUncheckedCreateNestedManyWithoutMentorInput
    availabilities?: MentorAvailabilityUncheckedCreateNestedManyWithoutMentorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutBookingInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutBookingInput, MentorUncheckedCreateWithoutBookingInput>
  }

  export type BookingReviewCreateWithoutBookingInput = {
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type BookingReviewUncheckedCreateWithoutBookingInput = {
    id?: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type BookingReviewCreateOrConnectWithoutBookingInput = {
    where: BookingReviewWhereUniqueInput
    create: XOR<BookingReviewCreateWithoutBookingInput, BookingReviewUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    txRef: string
    amount: number
    currency: string
    status: string
    chapaTransactionRef: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: number
    txRef: string
    amount: number
    currency: string
    status: string
    chapaTransactionRef: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type ClientUpsertWithoutBookingInput = {
    update: XOR<ClientUpdateWithoutBookingInput, ClientUncheckedUpdateWithoutBookingInput>
    create: XOR<ClientCreateWithoutBookingInput, ClientUncheckedCreateWithoutBookingInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBookingInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBookingInput, ClientUncheckedUpdateWithoutBookingInput>
  }

  export type ClientUpdateWithoutBookingInput = {
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    interests?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorUpsertWithoutBookingInput = {
    update: XOR<MentorUpdateWithoutBookingInput, MentorUncheckedUpdateWithoutBookingInput>
    create: XOR<MentorCreateWithoutBookingInput, MentorUncheckedCreateWithoutBookingInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutBookingInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutBookingInput, MentorUncheckedUpdateWithoutBookingInput>
  }

  export type MentorUpdateWithoutBookingInput = {
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentorNestedInput
    mentorCategories?: MentorCategoryUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUpdateManyWithoutMentorNestedInput
    categories?: CategoryUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    pricePerMinute?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    mentorCategories?: MentorCategoryUncheckedUpdateManyWithoutMentorNestedInput
    availabilities?: MentorAvailabilityUncheckedUpdateManyWithoutMentorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type BookingReviewUpsertWithoutBookingInput = {
    update: XOR<BookingReviewUpdateWithoutBookingInput, BookingReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingReviewCreateWithoutBookingInput, BookingReviewUncheckedCreateWithoutBookingInput>
    where?: BookingReviewWhereInput
  }

  export type BookingReviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: BookingReviewWhereInput
    data: XOR<BookingReviewUpdateWithoutBookingInput, BookingReviewUncheckedUpdateWithoutBookingInput>
  }

  export type BookingReviewUpdateWithoutBookingInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingReviewUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    txRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    chapaTransactionRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    txRef?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    chapaTransactionRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutReviewInput = {
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutBookingInput
    mentor: MentorCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    mentorId: number
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutBookingNestedInput
    mentor?: MentorUpdateOneRequiredWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutPaymentInput = {
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutBookingInput
    mentor: MentorCreateNestedOneWithoutBookingInput
    review?: BookingReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    mentorId: number
    review?: BookingReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutBookingNestedInput
    mentor?: MentorUpdateOneRequiredWithoutBookingNestedInput
    review?: BookingReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    review?: BookingReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type UserGroupCreateManyUserInput = {
    id?: number
    groupId: number
  }

  export type UserUserPermissionCreateManyUserInput = {
    id?: number
    permissionId: number
  }

  export type UserGroupUpdateWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserGroupUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserGroupUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUserPermissionUpdateWithoutUserInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUserPermissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUserPermissionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyClientInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentorId: number
  }

  export type BookingUpdateWithoutClientInput = {
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: MentorUpdateOneRequiredWithoutBookingNestedInput
    review?: BookingReviewUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorId?: IntFieldUpdateOperationsInput | number
    review?: BookingReviewUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorCategoryCreateManyCategoryInput = {
    id?: number
    mentorId: number
  }

  export type MentorCategoryUpdateWithoutCategoryInput = {
    mentor?: MentorUpdateOneRequiredWithoutMentorCategoriesNestedInput
  }

  export type MentorCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorCategoryCreateManyMentorInput = {
    id?: number
    categoryId: number
  }

  export type MentorAvailabilityCreateManyMentorInput = {
    id?: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isAvailable: boolean
  }

  export type BookingCreateManyMentorInput = {
    id?: number
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    callType: string
    status: string
    amountPaid: number
    platformFee: number
    mentorPayout: number
    paymentStatus: boolean
    callLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type CategoryCreateManyMentorInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
  }

  export type MentorCategoryUpdateWithoutMentorInput = {
    category?: CategoryUpdateOneRequiredWithoutMentorCategoriesNestedInput
  }

  export type MentorCategoryUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorCategoryUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MentorAvailabilityUpdateWithoutMentorInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MentorAvailabilityUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MentorAvailabilityUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUpdateWithoutMentorInput = {
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutBookingNestedInput
    review?: BookingReviewUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    review?: BookingReviewUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    mentorPayout?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    callLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUpdateWithoutMentorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorCategories?: MentorCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorCategories?: MentorCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}