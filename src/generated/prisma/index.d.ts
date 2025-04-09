
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Space
 * 
 */
export type Space = $Result.DefaultSelection<Prisma.$SpacePayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Visibility: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]


export const BlockType: {
  LINK: 'LINK',
  TEXT: 'TEXT',
  EMBED: 'EMBED'
};

export type BlockType = (typeof BlockType)[keyof typeof BlockType]

}

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

export type BlockType = $Enums.BlockType

export const BlockType: typeof $Enums.BlockType

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * `prisma.space`: Exposes CRUD operations for the **Space** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spaces
    * const spaces = await prisma.space.findMany()
    * ```
    */
  get space(): Prisma.SpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Space: 'Space',
    Block: 'Block'
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
      modelProps: "user" | "space" | "block"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Space: {
        payload: Prisma.$SpacePayload<ExtArgs>
        fields: Prisma.SpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findFirst: {
            args: Prisma.SpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findMany: {
            args: Prisma.SpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          create: {
            args: Prisma.SpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          createMany: {
            args: Prisma.SpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          delete: {
            args: Prisma.SpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          update: {
            args: Prisma.SpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          deleteMany: {
            args: Prisma.SpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          upsert: {
            args: Prisma.SpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          aggregate: {
            args: Prisma.SpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpace>
          }
          groupBy: {
            args: Prisma.SpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpaceCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
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
    space?: SpaceOmit
    block?: BlockOmit
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
    spaces: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spaces?: boolean | UserCountOutputTypeCountSpacesArgs
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
  export type UserCountOutputTypeCountSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
  }


  /**
   * Count Type SpaceCountOutputType
   */

  export type SpaceCountOutputType = {
    block: number
  }

  export type SpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | SpaceCountOutputTypeCountBlockArgs
  }

  // Custom InputTypes
  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceCountOutputType
     */
    select?: SpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spaces?: boolean | User$spacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spaces?: boolean | User$spacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      spaces: Prisma.$SpacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    spaces<T extends User$spacesArgs<ExtArgs> = {}>(args?: Subset<T, User$spacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.spaces
   */
  export type User$spacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    cursor?: SpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
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
   * Model Space
   */

  export type AggregateSpace = {
    _count: SpaceCountAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  export type SpaceMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    visibility: $Enums.Visibility | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type SpaceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    visibility: $Enums.Visibility | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type SpaceCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    visibility: number
    userId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type SpaceMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    visibility?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type SpaceMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    visibility?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type SpaceCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    visibility?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type SpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Space to aggregate.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spaces
    **/
    _count?: true | SpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceMaxAggregateInputType
  }

  export type GetSpaceAggregateType<T extends SpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpace[P]>
      : GetScalarType<T[P], AggregateSpace[P]>
  }




  export type SpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithAggregationInput | SpaceOrderByWithAggregationInput[]
    by: SpaceScalarFieldEnum[] | SpaceScalarFieldEnum
    having?: SpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceCountAggregateInputType | true
    _min?: SpaceMinAggregateInputType
    _max?: SpaceMaxAggregateInputType
  }

  export type SpaceGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    visibility: $Enums.Visibility
    userId: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: SpaceCountAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  type GetSpaceGroupByPayload<T extends SpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceGroupByOutputType[P]>
        }
      >
    >


  export type SpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    visibility?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    block?: boolean | Space$blockArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    visibility?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    visibility?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    visibility?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type SpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "visibility" | "userId" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["space"]>
  export type SpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | Space$blockArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Space"
    objects: {
      block: Prisma.$BlockPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      visibility: $Enums.Visibility
      userId: string
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["space"]>
    composites: {}
  }

  type SpaceGetPayload<S extends boolean | null | undefined | SpaceDefaultArgs> = $Result.GetResult<Prisma.$SpacePayload, S>

  type SpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceCountAggregateInputType | true
    }

  export interface SpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Space'], meta: { name: 'Space' } }
    /**
     * Find zero or one Space that matches the filter.
     * @param {SpaceFindUniqueArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceFindUniqueArgs>(args: SelectSubset<T, SpaceFindUniqueArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Space that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceFindUniqueOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceFindFirstArgs>(args?: SelectSubset<T, SpaceFindFirstArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spaces
     * const spaces = await prisma.space.findMany()
     * 
     * // Get first 10 Spaces
     * const spaces = await prisma.space.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceWithIdOnly = await prisma.space.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceFindManyArgs>(args?: SelectSubset<T, SpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Space.
     * @param {SpaceCreateArgs} args - Arguments to create a Space.
     * @example
     * // Create one Space
     * const Space = await prisma.space.create({
     *   data: {
     *     // ... data to create a Space
     *   }
     * })
     * 
     */
    create<T extends SpaceCreateArgs>(args: SelectSubset<T, SpaceCreateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spaces.
     * @param {SpaceCreateManyArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceCreateManyArgs>(args?: SelectSubset<T, SpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spaces and returns the data saved in the database.
     * @param {SpaceCreateManyAndReturnArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, SpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Space.
     * @param {SpaceDeleteArgs} args - Arguments to delete one Space.
     * @example
     * // Delete one Space
     * const Space = await prisma.space.delete({
     *   where: {
     *     // ... filter to delete one Space
     *   }
     * })
     * 
     */
    delete<T extends SpaceDeleteArgs>(args: SelectSubset<T, SpaceDeleteArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Space.
     * @param {SpaceUpdateArgs} args - Arguments to update one Space.
     * @example
     * // Update one Space
     * const space = await prisma.space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceUpdateArgs>(args: SelectSubset<T, SpaceUpdateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spaces.
     * @param {SpaceDeleteManyArgs} args - Arguments to filter Spaces to delete.
     * @example
     * // Delete a few Spaces
     * const { count } = await prisma.space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceDeleteManyArgs>(args?: SelectSubset<T, SpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceUpdateManyArgs>(args: SelectSubset<T, SpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces and returns the data updated in the database.
     * @param {SpaceUpdateManyAndReturnArgs} args - Arguments to update many Spaces.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, SpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Space.
     * @param {SpaceUpsertArgs} args - Arguments to update or create a Space.
     * @example
     * // Update or create a Space
     * const space = await prisma.space.upsert({
     *   create: {
     *     // ... data to create a Space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Space we want to update
     *   }
     * })
     */
    upsert<T extends SpaceUpsertArgs>(args: SelectSubset<T, SpaceUpsertArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceCountArgs} args - Arguments to filter Spaces to count.
     * @example
     * // Count the number of Spaces
     * const count = await prisma.space.count({
     *   where: {
     *     // ... the filter for the Spaces we want to count
     *   }
     * })
    **/
    count<T extends SpaceCountArgs>(
      args?: Subset<T, SpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpaceAggregateArgs>(args: Subset<T, SpaceAggregateArgs>): Prisma.PrismaPromise<GetSpaceAggregateType<T>>

    /**
     * Group by Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceGroupByArgs} args - Group by arguments.
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
      T extends SpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceGroupByArgs['orderBy'] }
        : { orderBy?: SpaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Space model
   */
  readonly fields: SpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    block<T extends Space$blockArgs<ExtArgs> = {}>(args?: Subset<T, Space$blockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Space model
   */
  interface SpaceFieldRefs {
    readonly id: FieldRef<"Space", 'String'>
    readonly title: FieldRef<"Space", 'String'>
    readonly slug: FieldRef<"Space", 'String'>
    readonly description: FieldRef<"Space", 'String'>
    readonly visibility: FieldRef<"Space", 'Visibility'>
    readonly userId: FieldRef<"Space", 'String'>
    readonly createdAt: FieldRef<"Space", 'DateTime'>
    readonly updatedAt: FieldRef<"Space", 'DateTime'>
    readonly isDeleted: FieldRef<"Space", 'Boolean'>
    readonly deletedAt: FieldRef<"Space", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Space findUnique
   */
  export type SpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findUniqueOrThrow
   */
  export type SpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findFirst
   */
  export type SpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findFirstOrThrow
   */
  export type SpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findMany
   */
  export type SpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Spaces to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space create
   */
  export type SpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Space.
     */
    data: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
  }

  /**
   * Space createMany
   */
  export type SpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Space createManyAndReturn
   */
  export type SpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space update
   */
  export type SpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Space.
     */
    data: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
    /**
     * Choose, which Space to update.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space updateMany
   */
  export type SpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
  }

  /**
   * Space updateManyAndReturn
   */
  export type SpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space upsert
   */
  export type SpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Space to update in case it exists.
     */
    where: SpaceWhereUniqueInput
    /**
     * In case the Space found by the `where` argument doesn't exist, create a new Space with this data.
     */
    create: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
    /**
     * In case the Space was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
  }

  /**
   * Space delete
   */
  export type SpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter which Space to delete.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space deleteMany
   */
  export type SpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spaces to delete
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to delete.
     */
    limit?: number
  }

  /**
   * Space.block
   */
  export type Space$blockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Space without action
   */
  export type SpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
  }


  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    order: number | null
  }

  export type BlockSumAggregateOutputType = {
    order: number | null
  }

  export type BlockMinAggregateOutputType = {
    id: string | null
    type: $Enums.BlockType | null
    order: number | null
    spaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockMaxAggregateOutputType = {
    id: string | null
    type: $Enums.BlockType | null
    order: number | null
    spaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    type: number
    order: number
    content: number
    spaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    order?: true
  }

  export type BlockSumAggregateInputType = {
    order?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    type?: true
    order?: true
    spaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    type?: true
    order?: true
    spaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    type?: true
    order?: true
    content?: true
    spaceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: string
    type: $Enums.BlockType
    order: number
    content: JsonValue
    spaceId: string
    createdAt: Date
    updatedAt: Date
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    order?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    order?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    order?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    id?: boolean
    type?: boolean
    order?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "order" | "content" | "spaceId" | "createdAt" | "updatedAt", ExtArgs["result"]["block"]>
  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type BlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type BlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.BlockType
      order: number
      content: Prisma.JsonValue
      spaceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlockCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {BlockUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
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
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'String'>
    readonly type: FieldRef<"Block", 'BlockType'>
    readonly order: FieldRef<"Block", 'Int'>
    readonly content: FieldRef<"Block", 'Json'>
    readonly spaceId: FieldRef<"Block", 'String'>
    readonly createdAt: FieldRef<"Block", 'DateTime'>
    readonly updatedAt: FieldRef<"Block", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block createManyAndReturn
   */
  export type BlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block updateManyAndReturn
   */
  export type BlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
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
    clerkId: 'clerkId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpaceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    visibility: 'visibility',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type SpaceScalarFieldEnum = (typeof SpaceScalarFieldEnum)[keyof typeof SpaceScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    type: 'type',
    order: 'order',
    content: 'content',
    spaceId: 'spaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BlockType'
   */
  export type EnumBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockType'>
    


  /**
   * Reference to a field of type 'BlockType[]'
   */
  export type ListEnumBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    spaces?: SpaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spaces?: SpaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    clerkId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    spaces?: SpaceListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SpaceWhereInput = {
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    id?: StringFilter<"Space"> | string
    title?: StringFilter<"Space"> | string
    slug?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    visibility?: EnumVisibilityFilter<"Space"> | $Enums.Visibility
    userId?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    isDeleted?: BoolFilter<"Space"> | boolean
    deletedAt?: DateTimeNullableFilter<"Space"> | Date | string | null
    block?: BlockListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SpaceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    block?: BlockOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_slug?: SpaceUserIdSlugCompoundUniqueInput
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    title?: StringFilter<"Space"> | string
    slug?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    visibility?: EnumVisibilityFilter<"Space"> | $Enums.Visibility
    userId?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    isDeleted?: BoolFilter<"Space"> | boolean
    deletedAt?: DateTimeNullableFilter<"Space"> | Date | string | null
    block?: BlockListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_slug">

  export type SpaceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SpaceCountOrderByAggregateInput
    _max?: SpaceMaxOrderByAggregateInput
    _min?: SpaceMinOrderByAggregateInput
  }

  export type SpaceScalarWhereWithAggregatesInput = {
    AND?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    OR?: SpaceScalarWhereWithAggregatesInput[]
    NOT?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Space"> | string
    title?: StringWithAggregatesFilter<"Space"> | string
    slug?: StringWithAggregatesFilter<"Space"> | string
    description?: StringNullableWithAggregatesFilter<"Space"> | string | null
    visibility?: EnumVisibilityWithAggregatesFilter<"Space"> | $Enums.Visibility
    userId?: StringWithAggregatesFilter<"Space"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Space"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Space"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Space"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Space"> | Date | string | null
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: StringFilter<"Block"> | string
    type?: EnumBlockTypeFilter<"Block"> | $Enums.BlockType
    order?: IntFilter<"Block"> | number
    content?: JsonFilter<"Block">
    spaceId?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    content?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    space?: SpaceOrderByWithRelationInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    type?: EnumBlockTypeFilter<"Block"> | $Enums.BlockType
    order?: IntFilter<"Block"> | number
    content?: JsonFilter<"Block">
    spaceId?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }, "id">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    content?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Block"> | string
    type?: EnumBlockTypeWithAggregatesFilter<"Block"> | $Enums.BlockType
    order?: IntWithAggregatesFilter<"Block"> | number
    content?: JsonWithAggregatesFilter<"Block">
    spaceId?: StringWithAggregatesFilter<"Block"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaces?: SpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaces?: SpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: SpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: SpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    block?: BlockCreateNestedManyWithoutSpaceInput
    user: UserCreateNestedOneWithoutSpacesInput
  }

  export type SpaceUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    block?: BlockUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    block?: BlockUpdateManyWithoutSpaceNestedInput
    user?: UserUpdateOneRequiredWithoutSpacesNestedInput
  }

  export type SpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    block?: BlockUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type SpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlockCreateInput = {
    id?: string
    type: $Enums.BlockType
    order: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    space: SpaceCreateNestedOneWithoutBlockInput
  }

  export type BlockUncheckedCreateInput = {
    id?: string
    type: $Enums.BlockType
    order: number
    content: JsonNullValueInput | InputJsonValue
    spaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    order?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    order?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    spaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyInput = {
    id?: string
    type: $Enums.BlockType
    order: number
    content: JsonNullValueInput | InputJsonValue
    spaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    order?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    order?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    spaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SpaceListRelationFilter = {
    every?: SpaceWhereInput
    some?: SpaceWhereInput
    none?: SpaceWhereInput
  }

  export type SpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceUserIdSlugCompoundUniqueInput = {
    userId: string
    slug: string
  }

  export type SpaceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type SpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type SpaceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeFilter<$PrismaModel> | $Enums.BlockType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SpaceScalarRelationFilter = {
    is?: SpaceWhereInput
    isNot?: SpaceWhereInput
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    content?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SpaceCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type SpaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SpaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutUserInput | SpaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutUserInput | SpaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutUserInput | SpaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type SpaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutUserInput | SpaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutUserInput | SpaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutUserInput | SpaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type BlockCreateNestedManyWithoutSpaceInput = {
    create?: XOR<BlockCreateWithoutSpaceInput, BlockUncheckedCreateWithoutSpaceInput> | BlockCreateWithoutSpaceInput[] | BlockUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutSpaceInput | BlockCreateOrConnectWithoutSpaceInput[]
    createMany?: BlockCreateManySpaceInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSpacesInput = {
    create?: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpacesInput
    connect?: UserWhereUniqueInput
  }

  export type BlockUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<BlockCreateWithoutSpaceInput, BlockUncheckedCreateWithoutSpaceInput> | BlockCreateWithoutSpaceInput[] | BlockUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutSpaceInput | BlockCreateOrConnectWithoutSpaceInput[]
    createMany?: BlockCreateManySpaceInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BlockUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<BlockCreateWithoutSpaceInput, BlockUncheckedCreateWithoutSpaceInput> | BlockCreateWithoutSpaceInput[] | BlockUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutSpaceInput | BlockCreateOrConnectWithoutSpaceInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutSpaceInput | BlockUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: BlockCreateManySpaceInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutSpaceInput | BlockUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutSpaceInput | BlockUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSpacesNestedInput = {
    create?: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpacesInput
    upsert?: UserUpsertWithoutSpacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpacesInput, UserUpdateWithoutSpacesInput>, UserUncheckedUpdateWithoutSpacesInput>
  }

  export type BlockUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<BlockCreateWithoutSpaceInput, BlockUncheckedCreateWithoutSpaceInput> | BlockCreateWithoutSpaceInput[] | BlockUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutSpaceInput | BlockCreateOrConnectWithoutSpaceInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutSpaceInput | BlockUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: BlockCreateManySpaceInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutSpaceInput | BlockUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutSpaceInput | BlockUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type SpaceCreateNestedOneWithoutBlockInput = {
    create?: XOR<SpaceCreateWithoutBlockInput, SpaceUncheckedCreateWithoutBlockInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutBlockInput
    connect?: SpaceWhereUniqueInput
  }

  export type EnumBlockTypeFieldUpdateOperationsInput = {
    set?: $Enums.BlockType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SpaceUpdateOneRequiredWithoutBlockNestedInput = {
    create?: XOR<SpaceCreateWithoutBlockInput, SpaceUncheckedCreateWithoutBlockInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutBlockInput
    upsert?: SpaceUpsertWithoutBlockInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutBlockInput, SpaceUpdateWithoutBlockInput>, SpaceUncheckedUpdateWithoutBlockInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeFilter<$PrismaModel> | $Enums.BlockType
  }

  export type NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SpaceCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    block?: BlockCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    block?: BlockUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutUserInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput>
  }

  export type SpaceCreateManyUserInputEnvelope = {
    data: SpaceCreateManyUserInput | SpaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpaceUpsertWithWhereUniqueWithoutUserInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutUserInput, SpaceUncheckedUpdateWithoutUserInput>
    create: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutUserInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutUserInput, SpaceUncheckedUpdateWithoutUserInput>
  }

  export type SpaceUpdateManyWithWhereWithoutUserInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutUserInput>
  }

  export type SpaceScalarWhereInput = {
    AND?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    OR?: SpaceScalarWhereInput[]
    NOT?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    id?: StringFilter<"Space"> | string
    title?: StringFilter<"Space"> | string
    slug?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    visibility?: EnumVisibilityFilter<"Space"> | $Enums.Visibility
    userId?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    isDeleted?: BoolFilter<"Space"> | boolean
    deletedAt?: DateTimeNullableFilter<"Space"> | Date | string | null
  }

  export type BlockCreateWithoutSpaceInput = {
    id?: string
    type: $Enums.BlockType
    order: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUncheckedCreateWithoutSpaceInput = {
    id?: string
    type: $Enums.BlockType
    order: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateOrConnectWithoutSpaceInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutSpaceInput, BlockUncheckedCreateWithoutSpaceInput>
  }

  export type BlockCreateManySpaceInputEnvelope = {
    data: BlockCreateManySpaceInput | BlockCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSpacesInput = {
    id?: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSpacesInput = {
    id?: string
    clerkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSpacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
  }

  export type BlockUpsertWithWhereUniqueWithoutSpaceInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutSpaceInput, BlockUncheckedUpdateWithoutSpaceInput>
    create: XOR<BlockCreateWithoutSpaceInput, BlockUncheckedCreateWithoutSpaceInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutSpaceInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutSpaceInput, BlockUncheckedUpdateWithoutSpaceInput>
  }

  export type BlockUpdateManyWithWhereWithoutSpaceInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutSpaceInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    id?: StringFilter<"Block"> | string
    type?: EnumBlockTypeFilter<"Block"> | $Enums.BlockType
    order?: IntFilter<"Block"> | number
    content?: JsonFilter<"Block">
    spaceId?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
  }

  export type UserUpsertWithoutSpacesInput = {
    update: XOR<UserUpdateWithoutSpacesInput, UserUncheckedUpdateWithoutSpacesInput>
    create: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpacesInput, UserUncheckedUpdateWithoutSpacesInput>
  }

  export type UserUpdateWithoutSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceCreateWithoutBlockInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSpacesInput
  }

  export type SpaceUncheckedCreateWithoutBlockInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type SpaceCreateOrConnectWithoutBlockInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutBlockInput, SpaceUncheckedCreateWithoutBlockInput>
  }

  export type SpaceUpsertWithoutBlockInput = {
    update: XOR<SpaceUpdateWithoutBlockInput, SpaceUncheckedUpdateWithoutBlockInput>
    create: XOR<SpaceCreateWithoutBlockInput, SpaceUncheckedCreateWithoutBlockInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutBlockInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutBlockInput, SpaceUncheckedUpdateWithoutBlockInput>
  }

  export type SpaceUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSpacesNestedInput
  }

  export type SpaceUncheckedUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpaceCreateManyUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type SpaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    block?: BlockUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    block?: BlockUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlockCreateManySpaceInput = {
    id?: string
    type: $Enums.BlockType
    order: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    order?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    order?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    order?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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