
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
 * Model Jogo
 * 
 */
export type Jogo = $Result.DefaultSelection<Prisma.$JogoPayload>
/**
 * Model Personagem
 * 
 */
export type Personagem = $Result.DefaultSelection<Prisma.$PersonagemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jogos
 * const jogos = await prisma.jogo.findMany()
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
   * // Fetch zero or more Jogos
   * const jogos = await prisma.jogo.findMany()
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
   * `prisma.jogo`: Exposes CRUD operations for the **Jogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jogos
    * const jogos = await prisma.jogo.findMany()
    * ```
    */
  get jogo(): Prisma.JogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personagem`: Exposes CRUD operations for the **Personagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personagems
    * const personagems = await prisma.personagem.findMany()
    * ```
    */
  get personagem(): Prisma.PersonagemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Jogo: 'Jogo',
    Personagem: 'Personagem'
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
      modelProps: "jogo" | "personagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Jogo: {
        payload: Prisma.$JogoPayload<ExtArgs>
        fields: Prisma.JogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findFirst: {
            args: Prisma.JogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findMany: {
            args: Prisma.JogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          create: {
            args: Prisma.JogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          createMany: {
            args: Prisma.JogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JogoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          delete: {
            args: Prisma.JogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          update: {
            args: Prisma.JogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          deleteMany: {
            args: Prisma.JogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JogoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          upsert: {
            args: Prisma.JogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          aggregate: {
            args: Prisma.JogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJogo>
          }
          groupBy: {
            args: Prisma.JogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JogoCountArgs<ExtArgs>
            result: $Utils.Optional<JogoCountAggregateOutputType> | number
          }
        }
      }
      Personagem: {
        payload: Prisma.$PersonagemPayload<ExtArgs>
        fields: Prisma.PersonagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          findFirst: {
            args: Prisma.PersonagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          findMany: {
            args: Prisma.PersonagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>[]
          }
          create: {
            args: Prisma.PersonagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          createMany: {
            args: Prisma.PersonagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>[]
          }
          delete: {
            args: Prisma.PersonagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          update: {
            args: Prisma.PersonagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          deleteMany: {
            args: Prisma.PersonagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>[]
          }
          upsert: {
            args: Prisma.PersonagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonagemPayload>
          }
          aggregate: {
            args: Prisma.PersonagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonagem>
          }
          groupBy: {
            args: Prisma.PersonagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonagemCountArgs<ExtArgs>
            result: $Utils.Optional<PersonagemCountAggregateOutputType> | number
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
    jogo?: JogoOmit
    personagem?: PersonagemOmit
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
   * Count Type JogoCountOutputType
   */

  export type JogoCountOutputType = {
    personagem: number
  }

  export type JogoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personagem?: boolean | JogoCountOutputTypeCountPersonagemArgs
  }

  // Custom InputTypes
  /**
   * JogoCountOutputType without action
   */
  export type JogoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoCountOutputType
     */
    select?: JogoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JogoCountOutputType without action
   */
  export type JogoCountOutputTypeCountPersonagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Jogo
   */

  export type AggregateJogo = {
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  export type JogoAvgAggregateOutputType = {
    preco: Decimal | null
    tamanho: number | null
  }

  export type JogoSumAggregateOutputType = {
    preco: Decimal | null
    tamanho: number | null
  }

  export type JogoMinAggregateOutputType = {
    id: string | null
    genero: string | null
    preco: Decimal | null
    tamanho: number | null
    dataLancamento: Date | null
    multiplayer: boolean | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type JogoMaxAggregateOutputType = {
    id: string | null
    genero: string | null
    preco: Decimal | null
    tamanho: number | null
    dataLancamento: Date | null
    multiplayer: boolean | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type JogoCountAggregateOutputType = {
    id: number
    genero: number
    preco: number
    tamanho: number
    dataLancamento: number
    multiplayer: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type JogoAvgAggregateInputType = {
    preco?: true
    tamanho?: true
  }

  export type JogoSumAggregateInputType = {
    preco?: true
    tamanho?: true
  }

  export type JogoMinAggregateInputType = {
    id?: true
    genero?: true
    preco?: true
    tamanho?: true
    dataLancamento?: true
    multiplayer?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type JogoMaxAggregateInputType = {
    id?: true
    genero?: true
    preco?: true
    tamanho?: true
    dataLancamento?: true
    multiplayer?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type JogoCountAggregateInputType = {
    id?: true
    genero?: true
    preco?: true
    tamanho?: true
    dataLancamento?: true
    multiplayer?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type JogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogo to aggregate.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jogos
    **/
    _count?: true | JogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogoMaxAggregateInputType
  }

  export type GetJogoAggregateType<T extends JogoAggregateArgs> = {
        [P in keyof T & keyof AggregateJogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogo[P]>
      : GetScalarType<T[P], AggregateJogo[P]>
  }




  export type JogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithAggregationInput | JogoOrderByWithAggregationInput[]
    by: JogoScalarFieldEnum[] | JogoScalarFieldEnum
    having?: JogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogoCountAggregateInputType | true
    _avg?: JogoAvgAggregateInputType
    _sum?: JogoSumAggregateInputType
    _min?: JogoMinAggregateInputType
    _max?: JogoMaxAggregateInputType
  }

  export type JogoGroupByOutputType = {
    id: string
    genero: string
    preco: Decimal
    tamanho: number
    dataLancamento: Date
    multiplayer: boolean
    dataCriacao: Date
    dataAtualizacao: Date
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  type GetJogoGroupByPayload<T extends JogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogoGroupByOutputType[P]>
            : GetScalarType<T[P], JogoGroupByOutputType[P]>
        }
      >
    >


  export type JogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genero?: boolean
    preco?: boolean
    tamanho?: boolean
    dataLancamento?: boolean
    multiplayer?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    personagem?: boolean | Jogo$personagemArgs<ExtArgs>
    _count?: boolean | JogoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genero?: boolean
    preco?: boolean
    tamanho?: boolean
    dataLancamento?: boolean
    multiplayer?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genero?: boolean
    preco?: boolean
    tamanho?: boolean
    dataLancamento?: boolean
    multiplayer?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectScalar = {
    id?: boolean
    genero?: boolean
    preco?: boolean
    tamanho?: boolean
    dataLancamento?: boolean
    multiplayer?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type JogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genero" | "preco" | "tamanho" | "dataLancamento" | "multiplayer" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["jogo"]>
  export type JogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personagem?: boolean | Jogo$personagemArgs<ExtArgs>
    _count?: boolean | JogoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JogoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JogoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jogo"
    objects: {
      personagem: Prisma.$PersonagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genero: string
      preco: Prisma.Decimal
      tamanho: number
      dataLancamento: Date
      multiplayer: boolean
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["jogo"]>
    composites: {}
  }

  type JogoGetPayload<S extends boolean | null | undefined | JogoDefaultArgs> = $Result.GetResult<Prisma.$JogoPayload, S>

  type JogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JogoCountAggregateInputType | true
    }

  export interface JogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jogo'], meta: { name: 'Jogo' } }
    /**
     * Find zero or one Jogo that matches the filter.
     * @param {JogoFindUniqueArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JogoFindUniqueArgs>(args: SelectSubset<T, JogoFindUniqueArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JogoFindUniqueOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JogoFindUniqueOrThrowArgs>(args: SelectSubset<T, JogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JogoFindFirstArgs>(args?: SelectSubset<T, JogoFindFirstArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JogoFindFirstOrThrowArgs>(args?: SelectSubset<T, JogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jogos
     * const jogos = await prisma.jogo.findMany()
     * 
     * // Get first 10 Jogos
     * const jogos = await prisma.jogo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogoWithIdOnly = await prisma.jogo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JogoFindManyArgs>(args?: SelectSubset<T, JogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jogo.
     * @param {JogoCreateArgs} args - Arguments to create a Jogo.
     * @example
     * // Create one Jogo
     * const Jogo = await prisma.jogo.create({
     *   data: {
     *     // ... data to create a Jogo
     *   }
     * })
     * 
     */
    create<T extends JogoCreateArgs>(args: SelectSubset<T, JogoCreateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jogos.
     * @param {JogoCreateManyArgs} args - Arguments to create many Jogos.
     * @example
     * // Create many Jogos
     * const jogo = await prisma.jogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JogoCreateManyArgs>(args?: SelectSubset<T, JogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jogos and returns the data saved in the database.
     * @param {JogoCreateManyAndReturnArgs} args - Arguments to create many Jogos.
     * @example
     * // Create many Jogos
     * const jogo = await prisma.jogo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jogos and only return the `id`
     * const jogoWithIdOnly = await prisma.jogo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JogoCreateManyAndReturnArgs>(args?: SelectSubset<T, JogoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jogo.
     * @param {JogoDeleteArgs} args - Arguments to delete one Jogo.
     * @example
     * // Delete one Jogo
     * const Jogo = await prisma.jogo.delete({
     *   where: {
     *     // ... filter to delete one Jogo
     *   }
     * })
     * 
     */
    delete<T extends JogoDeleteArgs>(args: SelectSubset<T, JogoDeleteArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jogo.
     * @param {JogoUpdateArgs} args - Arguments to update one Jogo.
     * @example
     * // Update one Jogo
     * const jogo = await prisma.jogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JogoUpdateArgs>(args: SelectSubset<T, JogoUpdateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jogos.
     * @param {JogoDeleteManyArgs} args - Arguments to filter Jogos to delete.
     * @example
     * // Delete a few Jogos
     * const { count } = await prisma.jogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JogoDeleteManyArgs>(args?: SelectSubset<T, JogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JogoUpdateManyArgs>(args: SelectSubset<T, JogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos and returns the data updated in the database.
     * @param {JogoUpdateManyAndReturnArgs} args - Arguments to update many Jogos.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jogos and only return the `id`
     * const jogoWithIdOnly = await prisma.jogo.updateManyAndReturn({
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
    updateManyAndReturn<T extends JogoUpdateManyAndReturnArgs>(args: SelectSubset<T, JogoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jogo.
     * @param {JogoUpsertArgs} args - Arguments to update or create a Jogo.
     * @example
     * // Update or create a Jogo
     * const jogo = await prisma.jogo.upsert({
     *   create: {
     *     // ... data to create a Jogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jogo we want to update
     *   }
     * })
     */
    upsert<T extends JogoUpsertArgs>(args: SelectSubset<T, JogoUpsertArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoCountArgs} args - Arguments to filter Jogos to count.
     * @example
     * // Count the number of Jogos
     * const count = await prisma.jogo.count({
     *   where: {
     *     // ... the filter for the Jogos we want to count
     *   }
     * })
    **/
    count<T extends JogoCountArgs>(
      args?: Subset<T, JogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JogoAggregateArgs>(args: Subset<T, JogoAggregateArgs>): Prisma.PrismaPromise<GetJogoAggregateType<T>>

    /**
     * Group by Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoGroupByArgs} args - Group by arguments.
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
      T extends JogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogoGroupByArgs['orderBy'] }
        : { orderBy?: JogoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jogo model
   */
  readonly fields: JogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personagem<T extends Jogo$personagemArgs<ExtArgs> = {}>(args?: Subset<T, Jogo$personagemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Jogo model
   */
  interface JogoFieldRefs {
    readonly id: FieldRef<"Jogo", 'String'>
    readonly genero: FieldRef<"Jogo", 'String'>
    readonly preco: FieldRef<"Jogo", 'Decimal'>
    readonly tamanho: FieldRef<"Jogo", 'Int'>
    readonly dataLancamento: FieldRef<"Jogo", 'DateTime'>
    readonly multiplayer: FieldRef<"Jogo", 'Boolean'>
    readonly dataCriacao: FieldRef<"Jogo", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Jogo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jogo findUnique
   */
  export type JogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findUniqueOrThrow
   */
  export type JogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findFirst
   */
  export type JogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findFirstOrThrow
   */
  export type JogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findMany
   */
  export type JogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogos to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo create
   */
  export type JogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to create a Jogo.
     */
    data: XOR<JogoCreateInput, JogoUncheckedCreateInput>
  }

  /**
   * Jogo createMany
   */
  export type JogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jogo createManyAndReturn
   */
  export type JogoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jogo update
   */
  export type JogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to update a Jogo.
     */
    data: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
    /**
     * Choose, which Jogo to update.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo updateMany
   */
  export type JogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to update.
     */
    limit?: number
  }

  /**
   * Jogo updateManyAndReturn
   */
  export type JogoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to update.
     */
    limit?: number
  }

  /**
   * Jogo upsert
   */
  export type JogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The filter to search for the Jogo to update in case it exists.
     */
    where: JogoWhereUniqueInput
    /**
     * In case the Jogo found by the `where` argument doesn't exist, create a new Jogo with this data.
     */
    create: XOR<JogoCreateInput, JogoUncheckedCreateInput>
    /**
     * In case the Jogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
  }

  /**
   * Jogo delete
   */
  export type JogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter which Jogo to delete.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo deleteMany
   */
  export type JogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogos to delete
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to delete.
     */
    limit?: number
  }

  /**
   * Jogo.personagem
   */
  export type Jogo$personagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    where?: PersonagemWhereInput
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    cursor?: PersonagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * Jogo without action
   */
  export type JogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
  }


  /**
   * Model Personagem
   */

  export type AggregatePersonagem = {
    _count: PersonagemCountAggregateOutputType | null
    _avg: PersonagemAvgAggregateOutputType | null
    _sum: PersonagemSumAggregateOutputType | null
    _min: PersonagemMinAggregateOutputType | null
    _max: PersonagemMaxAggregateOutputType | null
  }

  export type PersonagemAvgAggregateOutputType = {
    idade: number | null
    forca: number | null
    inteligencia: number | null
  }

  export type PersonagemSumAggregateOutputType = {
    idade: number | null
    forca: number | null
    inteligencia: number | null
  }

  export type PersonagemMinAggregateOutputType = {
    id: string | null
    nome: string | null
    idade: number | null
    forca: number | null
    inteligencia: number | null
    habilidades: string | null
    jogoId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type PersonagemMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    idade: number | null
    forca: number | null
    inteligencia: number | null
    habilidades: string | null
    jogoId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type PersonagemCountAggregateOutputType = {
    id: number
    nome: number
    idade: number
    forca: number
    inteligencia: number
    habilidades: number
    jogoId: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type PersonagemAvgAggregateInputType = {
    idade?: true
    forca?: true
    inteligencia?: true
  }

  export type PersonagemSumAggregateInputType = {
    idade?: true
    forca?: true
    inteligencia?: true
  }

  export type PersonagemMinAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    forca?: true
    inteligencia?: true
    habilidades?: true
    jogoId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type PersonagemMaxAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    forca?: true
    inteligencia?: true
    habilidades?: true
    jogoId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type PersonagemCountAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    forca?: true
    inteligencia?: true
    habilidades?: true
    jogoId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type PersonagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personagem to aggregate.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personagems
    **/
    _count?: true | PersonagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonagemMaxAggregateInputType
  }

  export type GetPersonagemAggregateType<T extends PersonagemAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonagem[P]>
      : GetScalarType<T[P], AggregatePersonagem[P]>
  }




  export type PersonagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonagemWhereInput
    orderBy?: PersonagemOrderByWithAggregationInput | PersonagemOrderByWithAggregationInput[]
    by: PersonagemScalarFieldEnum[] | PersonagemScalarFieldEnum
    having?: PersonagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonagemCountAggregateInputType | true
    _avg?: PersonagemAvgAggregateInputType
    _sum?: PersonagemSumAggregateInputType
    _min?: PersonagemMinAggregateInputType
    _max?: PersonagemMaxAggregateInputType
  }

  export type PersonagemGroupByOutputType = {
    id: string
    nome: string
    idade: number
    forca: number
    inteligencia: number
    habilidades: string
    jogoId: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: PersonagemCountAggregateOutputType | null
    _avg: PersonagemAvgAggregateOutputType | null
    _sum: PersonagemSumAggregateOutputType | null
    _min: PersonagemMinAggregateOutputType | null
    _max: PersonagemMaxAggregateOutputType | null
  }

  type GetPersonagemGroupByPayload<T extends PersonagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonagemGroupByOutputType[P]>
            : GetScalarType<T[P], PersonagemGroupByOutputType[P]>
        }
      >
    >


  export type PersonagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    forca?: boolean
    inteligencia?: boolean
    habilidades?: boolean
    jogoId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personagem"]>

  export type PersonagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    forca?: boolean
    inteligencia?: boolean
    habilidades?: boolean
    jogoId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personagem"]>

  export type PersonagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    forca?: boolean
    inteligencia?: boolean
    habilidades?: boolean
    jogoId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personagem"]>

  export type PersonagemSelectScalar = {
    id?: boolean
    nome?: boolean
    idade?: boolean
    forca?: boolean
    inteligencia?: boolean
    habilidades?: boolean
    jogoId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type PersonagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "idade" | "forca" | "inteligencia" | "habilidades" | "jogoId" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["personagem"]>
  export type PersonagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
  }
  export type PersonagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
  }
  export type PersonagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | JogoDefaultArgs<ExtArgs>
  }

  export type $PersonagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personagem"
    objects: {
      jogo: Prisma.$JogoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      idade: number
      forca: number
      inteligencia: number
      habilidades: string
      jogoId: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["personagem"]>
    composites: {}
  }

  type PersonagemGetPayload<S extends boolean | null | undefined | PersonagemDefaultArgs> = $Result.GetResult<Prisma.$PersonagemPayload, S>

  type PersonagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonagemCountAggregateInputType | true
    }

  export interface PersonagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personagem'], meta: { name: 'Personagem' } }
    /**
     * Find zero or one Personagem that matches the filter.
     * @param {PersonagemFindUniqueArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonagemFindUniqueArgs>(args: SelectSubset<T, PersonagemFindUniqueArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonagemFindUniqueOrThrowArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonagemFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemFindFirstArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonagemFindFirstArgs>(args?: SelectSubset<T, PersonagemFindFirstArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemFindFirstOrThrowArgs} args - Arguments to find a Personagem
     * @example
     * // Get one Personagem
     * const personagem = await prisma.personagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonagemFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personagems
     * const personagems = await prisma.personagem.findMany()
     * 
     * // Get first 10 Personagems
     * const personagems = await prisma.personagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personagemWithIdOnly = await prisma.personagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonagemFindManyArgs>(args?: SelectSubset<T, PersonagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personagem.
     * @param {PersonagemCreateArgs} args - Arguments to create a Personagem.
     * @example
     * // Create one Personagem
     * const Personagem = await prisma.personagem.create({
     *   data: {
     *     // ... data to create a Personagem
     *   }
     * })
     * 
     */
    create<T extends PersonagemCreateArgs>(args: SelectSubset<T, PersonagemCreateArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personagems.
     * @param {PersonagemCreateManyArgs} args - Arguments to create many Personagems.
     * @example
     * // Create many Personagems
     * const personagem = await prisma.personagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonagemCreateManyArgs>(args?: SelectSubset<T, PersonagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personagems and returns the data saved in the database.
     * @param {PersonagemCreateManyAndReturnArgs} args - Arguments to create many Personagems.
     * @example
     * // Create many Personagems
     * const personagem = await prisma.personagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personagems and only return the `id`
     * const personagemWithIdOnly = await prisma.personagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonagemCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personagem.
     * @param {PersonagemDeleteArgs} args - Arguments to delete one Personagem.
     * @example
     * // Delete one Personagem
     * const Personagem = await prisma.personagem.delete({
     *   where: {
     *     // ... filter to delete one Personagem
     *   }
     * })
     * 
     */
    delete<T extends PersonagemDeleteArgs>(args: SelectSubset<T, PersonagemDeleteArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personagem.
     * @param {PersonagemUpdateArgs} args - Arguments to update one Personagem.
     * @example
     * // Update one Personagem
     * const personagem = await prisma.personagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonagemUpdateArgs>(args: SelectSubset<T, PersonagemUpdateArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personagems.
     * @param {PersonagemDeleteManyArgs} args - Arguments to filter Personagems to delete.
     * @example
     * // Delete a few Personagems
     * const { count } = await prisma.personagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonagemDeleteManyArgs>(args?: SelectSubset<T, PersonagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personagems
     * const personagem = await prisma.personagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonagemUpdateManyArgs>(args: SelectSubset<T, PersonagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personagems and returns the data updated in the database.
     * @param {PersonagemUpdateManyAndReturnArgs} args - Arguments to update many Personagems.
     * @example
     * // Update many Personagems
     * const personagem = await prisma.personagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personagems and only return the `id`
     * const personagemWithIdOnly = await prisma.personagem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonagemUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personagem.
     * @param {PersonagemUpsertArgs} args - Arguments to update or create a Personagem.
     * @example
     * // Update or create a Personagem
     * const personagem = await prisma.personagem.upsert({
     *   create: {
     *     // ... data to create a Personagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personagem we want to update
     *   }
     * })
     */
    upsert<T extends PersonagemUpsertArgs>(args: SelectSubset<T, PersonagemUpsertArgs<ExtArgs>>): Prisma__PersonagemClient<$Result.GetResult<Prisma.$PersonagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemCountArgs} args - Arguments to filter Personagems to count.
     * @example
     * // Count the number of Personagems
     * const count = await prisma.personagem.count({
     *   where: {
     *     // ... the filter for the Personagems we want to count
     *   }
     * })
    **/
    count<T extends PersonagemCountArgs>(
      args?: Subset<T, PersonagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonagemAggregateArgs>(args: Subset<T, PersonagemAggregateArgs>): Prisma.PrismaPromise<GetPersonagemAggregateType<T>>

    /**
     * Group by Personagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonagemGroupByArgs} args - Group by arguments.
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
      T extends PersonagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonagemGroupByArgs['orderBy'] }
        : { orderBy?: PersonagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personagem model
   */
  readonly fields: PersonagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogo<T extends JogoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JogoDefaultArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Personagem model
   */
  interface PersonagemFieldRefs {
    readonly id: FieldRef<"Personagem", 'String'>
    readonly nome: FieldRef<"Personagem", 'String'>
    readonly idade: FieldRef<"Personagem", 'Int'>
    readonly forca: FieldRef<"Personagem", 'Int'>
    readonly inteligencia: FieldRef<"Personagem", 'Int'>
    readonly habilidades: FieldRef<"Personagem", 'String'>
    readonly jogoId: FieldRef<"Personagem", 'String'>
    readonly dataCriacao: FieldRef<"Personagem", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Personagem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Personagem findUnique
   */
  export type PersonagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem findUniqueOrThrow
   */
  export type PersonagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem findFirst
   */
  export type PersonagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personagems.
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personagems.
     */
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * Personagem findFirstOrThrow
   */
  export type PersonagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagem to fetch.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personagems.
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personagems.
     */
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * Personagem findMany
   */
  export type PersonagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter, which Personagems to fetch.
     */
    where?: PersonagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personagems to fetch.
     */
    orderBy?: PersonagemOrderByWithRelationInput | PersonagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personagems.
     */
    cursor?: PersonagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personagems.
     */
    skip?: number
    distinct?: PersonagemScalarFieldEnum | PersonagemScalarFieldEnum[]
  }

  /**
   * Personagem create
   */
  export type PersonagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Personagem.
     */
    data: XOR<PersonagemCreateInput, PersonagemUncheckedCreateInput>
  }

  /**
   * Personagem createMany
   */
  export type PersonagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personagems.
     */
    data: PersonagemCreateManyInput | PersonagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personagem createManyAndReturn
   */
  export type PersonagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * The data used to create many Personagems.
     */
    data: PersonagemCreateManyInput | PersonagemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personagem update
   */
  export type PersonagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Personagem.
     */
    data: XOR<PersonagemUpdateInput, PersonagemUncheckedUpdateInput>
    /**
     * Choose, which Personagem to update.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem updateMany
   */
  export type PersonagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personagems.
     */
    data: XOR<PersonagemUpdateManyMutationInput, PersonagemUncheckedUpdateManyInput>
    /**
     * Filter which Personagems to update
     */
    where?: PersonagemWhereInput
    /**
     * Limit how many Personagems to update.
     */
    limit?: number
  }

  /**
   * Personagem updateManyAndReturn
   */
  export type PersonagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * The data used to update Personagems.
     */
    data: XOR<PersonagemUpdateManyMutationInput, PersonagemUncheckedUpdateManyInput>
    /**
     * Filter which Personagems to update
     */
    where?: PersonagemWhereInput
    /**
     * Limit how many Personagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personagem upsert
   */
  export type PersonagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Personagem to update in case it exists.
     */
    where: PersonagemWhereUniqueInput
    /**
     * In case the Personagem found by the `where` argument doesn't exist, create a new Personagem with this data.
     */
    create: XOR<PersonagemCreateInput, PersonagemUncheckedCreateInput>
    /**
     * In case the Personagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonagemUpdateInput, PersonagemUncheckedUpdateInput>
  }

  /**
   * Personagem delete
   */
  export type PersonagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
    /**
     * Filter which Personagem to delete.
     */
    where: PersonagemWhereUniqueInput
  }

  /**
   * Personagem deleteMany
   */
  export type PersonagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personagems to delete
     */
    where?: PersonagemWhereInput
    /**
     * Limit how many Personagems to delete.
     */
    limit?: number
  }

  /**
   * Personagem without action
   */
  export type PersonagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personagem
     */
    select?: PersonagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personagem
     */
    omit?: PersonagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonagemInclude<ExtArgs> | null
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


  export const JogoScalarFieldEnum: {
    id: 'id',
    genero: 'genero',
    preco: 'preco',
    tamanho: 'tamanho',
    dataLancamento: 'dataLancamento',
    multiplayer: 'multiplayer',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type JogoScalarFieldEnum = (typeof JogoScalarFieldEnum)[keyof typeof JogoScalarFieldEnum]


  export const PersonagemScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idade: 'idade',
    forca: 'forca',
    inteligencia: 'inteligencia',
    habilidades: 'habilidades',
    jogoId: 'jogoId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type PersonagemScalarFieldEnum = (typeof PersonagemScalarFieldEnum)[keyof typeof PersonagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type JogoWhereInput = {
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    id?: StringFilter<"Jogo"> | string
    genero?: StringFilter<"Jogo"> | string
    preco?: DecimalFilter<"Jogo"> | Decimal | DecimalJsLike | number | string
    tamanho?: IntFilter<"Jogo"> | number
    dataLancamento?: DateTimeFilter<"Jogo"> | Date | string
    multiplayer?: BoolFilter<"Jogo"> | boolean
    dataCriacao?: DateTimeFilter<"Jogo"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Jogo"> | Date | string
    personagem?: PersonagemListRelationFilter
  }

  export type JogoOrderByWithRelationInput = {
    id?: SortOrder
    genero?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
    dataLancamento?: SortOrder
    multiplayer?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    personagem?: PersonagemOrderByRelationAggregateInput
  }

  export type JogoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    genero?: StringFilter<"Jogo"> | string
    preco?: DecimalFilter<"Jogo"> | Decimal | DecimalJsLike | number | string
    tamanho?: IntFilter<"Jogo"> | number
    dataLancamento?: DateTimeFilter<"Jogo"> | Date | string
    multiplayer?: BoolFilter<"Jogo"> | boolean
    dataCriacao?: DateTimeFilter<"Jogo"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Jogo"> | Date | string
    personagem?: PersonagemListRelationFilter
  }, "id">

  export type JogoOrderByWithAggregationInput = {
    id?: SortOrder
    genero?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
    dataLancamento?: SortOrder
    multiplayer?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: JogoCountOrderByAggregateInput
    _avg?: JogoAvgOrderByAggregateInput
    _max?: JogoMaxOrderByAggregateInput
    _min?: JogoMinOrderByAggregateInput
    _sum?: JogoSumOrderByAggregateInput
  }

  export type JogoScalarWhereWithAggregatesInput = {
    AND?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    OR?: JogoScalarWhereWithAggregatesInput[]
    NOT?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jogo"> | string
    genero?: StringWithAggregatesFilter<"Jogo"> | string
    preco?: DecimalWithAggregatesFilter<"Jogo"> | Decimal | DecimalJsLike | number | string
    tamanho?: IntWithAggregatesFilter<"Jogo"> | number
    dataLancamento?: DateTimeWithAggregatesFilter<"Jogo"> | Date | string
    multiplayer?: BoolWithAggregatesFilter<"Jogo"> | boolean
    dataCriacao?: DateTimeWithAggregatesFilter<"Jogo"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Jogo"> | Date | string
  }

  export type PersonagemWhereInput = {
    AND?: PersonagemWhereInput | PersonagemWhereInput[]
    OR?: PersonagemWhereInput[]
    NOT?: PersonagemWhereInput | PersonagemWhereInput[]
    id?: StringFilter<"Personagem"> | string
    nome?: StringFilter<"Personagem"> | string
    idade?: IntFilter<"Personagem"> | number
    forca?: IntFilter<"Personagem"> | number
    inteligencia?: IntFilter<"Personagem"> | number
    habilidades?: StringFilter<"Personagem"> | string
    jogoId?: StringFilter<"Personagem"> | string
    dataCriacao?: DateTimeFilter<"Personagem"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Personagem"> | Date | string
    jogo?: XOR<JogoScalarRelationFilter, JogoWhereInput>
  }

  export type PersonagemOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    forca?: SortOrder
    inteligencia?: SortOrder
    habilidades?: SortOrder
    jogoId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    jogo?: JogoOrderByWithRelationInput
  }

  export type PersonagemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonagemWhereInput | PersonagemWhereInput[]
    OR?: PersonagemWhereInput[]
    NOT?: PersonagemWhereInput | PersonagemWhereInput[]
    nome?: StringFilter<"Personagem"> | string
    idade?: IntFilter<"Personagem"> | number
    forca?: IntFilter<"Personagem"> | number
    inteligencia?: IntFilter<"Personagem"> | number
    habilidades?: StringFilter<"Personagem"> | string
    jogoId?: StringFilter<"Personagem"> | string
    dataCriacao?: DateTimeFilter<"Personagem"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Personagem"> | Date | string
    jogo?: XOR<JogoScalarRelationFilter, JogoWhereInput>
  }, "id">

  export type PersonagemOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    forca?: SortOrder
    inteligencia?: SortOrder
    habilidades?: SortOrder
    jogoId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: PersonagemCountOrderByAggregateInput
    _avg?: PersonagemAvgOrderByAggregateInput
    _max?: PersonagemMaxOrderByAggregateInput
    _min?: PersonagemMinOrderByAggregateInput
    _sum?: PersonagemSumOrderByAggregateInput
  }

  export type PersonagemScalarWhereWithAggregatesInput = {
    AND?: PersonagemScalarWhereWithAggregatesInput | PersonagemScalarWhereWithAggregatesInput[]
    OR?: PersonagemScalarWhereWithAggregatesInput[]
    NOT?: PersonagemScalarWhereWithAggregatesInput | PersonagemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Personagem"> | string
    nome?: StringWithAggregatesFilter<"Personagem"> | string
    idade?: IntWithAggregatesFilter<"Personagem"> | number
    forca?: IntWithAggregatesFilter<"Personagem"> | number
    inteligencia?: IntWithAggregatesFilter<"Personagem"> | number
    habilidades?: StringWithAggregatesFilter<"Personagem"> | string
    jogoId?: StringWithAggregatesFilter<"Personagem"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Personagem"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Personagem"> | Date | string
  }

  export type JogoCreateInput = {
    id?: string
    genero: string
    preco: Decimal | DecimalJsLike | number | string
    tamanho: number
    dataLancamento: Date | string
    multiplayer: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    personagem?: PersonagemCreateNestedManyWithoutJogoInput
  }

  export type JogoUncheckedCreateInput = {
    id?: string
    genero: string
    preco: Decimal | DecimalJsLike | number | string
    tamanho: number
    dataLancamento: Date | string
    multiplayer: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    personagem?: PersonagemUncheckedCreateNestedManyWithoutJogoInput
  }

  export type JogoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tamanho?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    multiplayer?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    personagem?: PersonagemUpdateManyWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tamanho?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    multiplayer?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    personagem?: PersonagemUncheckedUpdateManyWithoutJogoNestedInput
  }

  export type JogoCreateManyInput = {
    id?: string
    genero: string
    preco: Decimal | DecimalJsLike | number | string
    tamanho: number
    dataLancamento: Date | string
    multiplayer: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type JogoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tamanho?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    multiplayer?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JogoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tamanho?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    multiplayer?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonagemCreateInput = {
    id?: string
    nome: string
    idade: number
    forca: number
    inteligencia: number
    habilidades: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    jogo: JogoCreateNestedOneWithoutPersonagemInput
  }

  export type PersonagemUncheckedCreateInput = {
    id?: string
    nome: string
    idade: number
    forca: number
    inteligencia: number
    habilidades: string
    jogoId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PersonagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    inteligencia?: IntFieldUpdateOperationsInput | number
    habilidades?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    jogo?: JogoUpdateOneRequiredWithoutPersonagemNestedInput
  }

  export type PersonagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    inteligencia?: IntFieldUpdateOperationsInput | number
    habilidades?: StringFieldUpdateOperationsInput | string
    jogoId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonagemCreateManyInput = {
    id?: string
    nome: string
    idade: number
    forca: number
    inteligencia: number
    habilidades: string
    jogoId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PersonagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    inteligencia?: IntFieldUpdateOperationsInput | number
    habilidades?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    inteligencia?: IntFieldUpdateOperationsInput | number
    habilidades?: StringFieldUpdateOperationsInput | string
    jogoId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonagemListRelationFilter = {
    every?: PersonagemWhereInput
    some?: PersonagemWhereInput
    none?: PersonagemWhereInput
  }

  export type PersonagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JogoCountOrderByAggregateInput = {
    id?: SortOrder
    genero?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
    dataLancamento?: SortOrder
    multiplayer?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type JogoAvgOrderByAggregateInput = {
    preco?: SortOrder
    tamanho?: SortOrder
  }

  export type JogoMaxOrderByAggregateInput = {
    id?: SortOrder
    genero?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
    dataLancamento?: SortOrder
    multiplayer?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type JogoMinOrderByAggregateInput = {
    id?: SortOrder
    genero?: SortOrder
    preco?: SortOrder
    tamanho?: SortOrder
    dataLancamento?: SortOrder
    multiplayer?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type JogoSumOrderByAggregateInput = {
    preco?: SortOrder
    tamanho?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type JogoScalarRelationFilter = {
    is?: JogoWhereInput
    isNot?: JogoWhereInput
  }

  export type PersonagemCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    forca?: SortOrder
    inteligencia?: SortOrder
    habilidades?: SortOrder
    jogoId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PersonagemAvgOrderByAggregateInput = {
    idade?: SortOrder
    forca?: SortOrder
    inteligencia?: SortOrder
  }

  export type PersonagemMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    forca?: SortOrder
    inteligencia?: SortOrder
    habilidades?: SortOrder
    jogoId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PersonagemMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    forca?: SortOrder
    inteligencia?: SortOrder
    habilidades?: SortOrder
    jogoId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PersonagemSumOrderByAggregateInput = {
    idade?: SortOrder
    forca?: SortOrder
    inteligencia?: SortOrder
  }

  export type PersonagemCreateNestedManyWithoutJogoInput = {
    create?: XOR<PersonagemCreateWithoutJogoInput, PersonagemUncheckedCreateWithoutJogoInput> | PersonagemCreateWithoutJogoInput[] | PersonagemUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: PersonagemCreateOrConnectWithoutJogoInput | PersonagemCreateOrConnectWithoutJogoInput[]
    createMany?: PersonagemCreateManyJogoInputEnvelope
    connect?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
  }

  export type PersonagemUncheckedCreateNestedManyWithoutJogoInput = {
    create?: XOR<PersonagemCreateWithoutJogoInput, PersonagemUncheckedCreateWithoutJogoInput> | PersonagemCreateWithoutJogoInput[] | PersonagemUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: PersonagemCreateOrConnectWithoutJogoInput | PersonagemCreateOrConnectWithoutJogoInput[]
    createMany?: PersonagemCreateManyJogoInputEnvelope
    connect?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonagemUpdateManyWithoutJogoNestedInput = {
    create?: XOR<PersonagemCreateWithoutJogoInput, PersonagemUncheckedCreateWithoutJogoInput> | PersonagemCreateWithoutJogoInput[] | PersonagemUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: PersonagemCreateOrConnectWithoutJogoInput | PersonagemCreateOrConnectWithoutJogoInput[]
    upsert?: PersonagemUpsertWithWhereUniqueWithoutJogoInput | PersonagemUpsertWithWhereUniqueWithoutJogoInput[]
    createMany?: PersonagemCreateManyJogoInputEnvelope
    set?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    disconnect?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    delete?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    connect?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    update?: PersonagemUpdateWithWhereUniqueWithoutJogoInput | PersonagemUpdateWithWhereUniqueWithoutJogoInput[]
    updateMany?: PersonagemUpdateManyWithWhereWithoutJogoInput | PersonagemUpdateManyWithWhereWithoutJogoInput[]
    deleteMany?: PersonagemScalarWhereInput | PersonagemScalarWhereInput[]
  }

  export type PersonagemUncheckedUpdateManyWithoutJogoNestedInput = {
    create?: XOR<PersonagemCreateWithoutJogoInput, PersonagemUncheckedCreateWithoutJogoInput> | PersonagemCreateWithoutJogoInput[] | PersonagemUncheckedCreateWithoutJogoInput[]
    connectOrCreate?: PersonagemCreateOrConnectWithoutJogoInput | PersonagemCreateOrConnectWithoutJogoInput[]
    upsert?: PersonagemUpsertWithWhereUniqueWithoutJogoInput | PersonagemUpsertWithWhereUniqueWithoutJogoInput[]
    createMany?: PersonagemCreateManyJogoInputEnvelope
    set?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    disconnect?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    delete?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    connect?: PersonagemWhereUniqueInput | PersonagemWhereUniqueInput[]
    update?: PersonagemUpdateWithWhereUniqueWithoutJogoInput | PersonagemUpdateWithWhereUniqueWithoutJogoInput[]
    updateMany?: PersonagemUpdateManyWithWhereWithoutJogoInput | PersonagemUpdateManyWithWhereWithoutJogoInput[]
    deleteMany?: PersonagemScalarWhereInput | PersonagemScalarWhereInput[]
  }

  export type JogoCreateNestedOneWithoutPersonagemInput = {
    create?: XOR<JogoCreateWithoutPersonagemInput, JogoUncheckedCreateWithoutPersonagemInput>
    connectOrCreate?: JogoCreateOrConnectWithoutPersonagemInput
    connect?: JogoWhereUniqueInput
  }

  export type JogoUpdateOneRequiredWithoutPersonagemNestedInput = {
    create?: XOR<JogoCreateWithoutPersonagemInput, JogoUncheckedCreateWithoutPersonagemInput>
    connectOrCreate?: JogoCreateOrConnectWithoutPersonagemInput
    upsert?: JogoUpsertWithoutPersonagemInput
    connect?: JogoWhereUniqueInput
    update?: XOR<XOR<JogoUpdateToOneWithWhereWithoutPersonagemInput, JogoUpdateWithoutPersonagemInput>, JogoUncheckedUpdateWithoutPersonagemInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PersonagemCreateWithoutJogoInput = {
    id?: string
    nome: string
    idade: number
    forca: number
    inteligencia: number
    habilidades: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PersonagemUncheckedCreateWithoutJogoInput = {
    id?: string
    nome: string
    idade: number
    forca: number
    inteligencia: number
    habilidades: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PersonagemCreateOrConnectWithoutJogoInput = {
    where: PersonagemWhereUniqueInput
    create: XOR<PersonagemCreateWithoutJogoInput, PersonagemUncheckedCreateWithoutJogoInput>
  }

  export type PersonagemCreateManyJogoInputEnvelope = {
    data: PersonagemCreateManyJogoInput | PersonagemCreateManyJogoInput[]
    skipDuplicates?: boolean
  }

  export type PersonagemUpsertWithWhereUniqueWithoutJogoInput = {
    where: PersonagemWhereUniqueInput
    update: XOR<PersonagemUpdateWithoutJogoInput, PersonagemUncheckedUpdateWithoutJogoInput>
    create: XOR<PersonagemCreateWithoutJogoInput, PersonagemUncheckedCreateWithoutJogoInput>
  }

  export type PersonagemUpdateWithWhereUniqueWithoutJogoInput = {
    where: PersonagemWhereUniqueInput
    data: XOR<PersonagemUpdateWithoutJogoInput, PersonagemUncheckedUpdateWithoutJogoInput>
  }

  export type PersonagemUpdateManyWithWhereWithoutJogoInput = {
    where: PersonagemScalarWhereInput
    data: XOR<PersonagemUpdateManyMutationInput, PersonagemUncheckedUpdateManyWithoutJogoInput>
  }

  export type PersonagemScalarWhereInput = {
    AND?: PersonagemScalarWhereInput | PersonagemScalarWhereInput[]
    OR?: PersonagemScalarWhereInput[]
    NOT?: PersonagemScalarWhereInput | PersonagemScalarWhereInput[]
    id?: StringFilter<"Personagem"> | string
    nome?: StringFilter<"Personagem"> | string
    idade?: IntFilter<"Personagem"> | number
    forca?: IntFilter<"Personagem"> | number
    inteligencia?: IntFilter<"Personagem"> | number
    habilidades?: StringFilter<"Personagem"> | string
    jogoId?: StringFilter<"Personagem"> | string
    dataCriacao?: DateTimeFilter<"Personagem"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Personagem"> | Date | string
  }

  export type JogoCreateWithoutPersonagemInput = {
    id?: string
    genero: string
    preco: Decimal | DecimalJsLike | number | string
    tamanho: number
    dataLancamento: Date | string
    multiplayer: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type JogoUncheckedCreateWithoutPersonagemInput = {
    id?: string
    genero: string
    preco: Decimal | DecimalJsLike | number | string
    tamanho: number
    dataLancamento: Date | string
    multiplayer: boolean
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type JogoCreateOrConnectWithoutPersonagemInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutPersonagemInput, JogoUncheckedCreateWithoutPersonagemInput>
  }

  export type JogoUpsertWithoutPersonagemInput = {
    update: XOR<JogoUpdateWithoutPersonagemInput, JogoUncheckedUpdateWithoutPersonagemInput>
    create: XOR<JogoCreateWithoutPersonagemInput, JogoUncheckedCreateWithoutPersonagemInput>
    where?: JogoWhereInput
  }

  export type JogoUpdateToOneWithWhereWithoutPersonagemInput = {
    where?: JogoWhereInput
    data: XOR<JogoUpdateWithoutPersonagemInput, JogoUncheckedUpdateWithoutPersonagemInput>
  }

  export type JogoUpdateWithoutPersonagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tamanho?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    multiplayer?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JogoUncheckedUpdateWithoutPersonagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tamanho?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    multiplayer?: BoolFieldUpdateOperationsInput | boolean
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonagemCreateManyJogoInput = {
    id?: string
    nome: string
    idade: number
    forca: number
    inteligencia: number
    habilidades: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PersonagemUpdateWithoutJogoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    inteligencia?: IntFieldUpdateOperationsInput | number
    habilidades?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonagemUncheckedUpdateWithoutJogoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    inteligencia?: IntFieldUpdateOperationsInput | number
    habilidades?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonagemUncheckedUpdateManyWithoutJogoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    forca?: IntFieldUpdateOperationsInput | number
    inteligencia?: IntFieldUpdateOperationsInput | number
    habilidades?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
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