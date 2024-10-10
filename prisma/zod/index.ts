import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const PlayerScalarFieldEnumSchema = z.enum(['id','accelerateType','alternatePosition','club','createdAt','defending','dribbling','futbinId','futbinPlayerUrl','height','imageUrl','inGameStats','league','name','nation','pace','passing','physicality','playerType','playstylePlus','popularity','position','positionAffinity','price','priceTrend','rating','shooting','skillMoves','updatedAt','weakFoot']);

export const ScrapedPageScalarFieldEnumSchema = z.enum(['id','createdAt','pageNumber','type','updatedAt','url']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PLAYER SCHEMA
/////////////////////////////////////////

export const PlayerSchema = z.object({
  id: z.string(),
  accelerateType: z.string(),
  alternatePosition: z.string(),
  club: z.string(),
  createdAt: z.coerce.date(),
  defending: z.bigint(),
  dribbling: z.bigint(),
  futbinId: z.bigint(),
  futbinPlayerUrl: z.string(),
  height: z.string(),
  imageUrl: z.string(),
  inGameStats: z.bigint(),
  league: z.string(),
  name: z.string(),
  nation: z.string(),
  pace: z.bigint(),
  passing: z.bigint(),
  physicality: z.bigint(),
  playerType: z.string(),
  playstylePlus: z.string(),
  popularity: z.bigint(),
  position: z.string(),
  positionAffinity: z.string().nullable(),
  price: z.bigint(),
  priceTrend: z.string(),
  rating: z.bigint(),
  shooting: z.bigint(),
  skillMoves: z.bigint(),
  updatedAt: z.coerce.date(),
  weakFoot: z.bigint(),
})

export type Player = z.infer<typeof PlayerSchema>

/////////////////////////////////////////
// SCRAPED PAGE SCHEMA
/////////////////////////////////////////

export const ScrapedPageSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  pageNumber: z.bigint(),
  type: z.string(),
  updatedAt: z.coerce.date(),
  url: z.string(),
})

export type ScrapedPage = z.infer<typeof ScrapedPageSchema>

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PLAYER
//------------------------------------------------------

export const PlayerArgsSchema: z.ZodType<Prisma.PlayerDefaultArgs> = z.object({
  select: z.lazy(() => PlayerSelectSchema).optional(),
}).strict();

export const PlayerSelectSchema: z.ZodType<Prisma.PlayerSelect> = z.object({
  id: z.boolean().optional(),
  accelerateType: z.boolean().optional(),
  alternatePosition: z.boolean().optional(),
  club: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  defending: z.boolean().optional(),
  dribbling: z.boolean().optional(),
  futbinId: z.boolean().optional(),
  futbinPlayerUrl: z.boolean().optional(),
  height: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  inGameStats: z.boolean().optional(),
  league: z.boolean().optional(),
  name: z.boolean().optional(),
  nation: z.boolean().optional(),
  pace: z.boolean().optional(),
  passing: z.boolean().optional(),
  physicality: z.boolean().optional(),
  playerType: z.boolean().optional(),
  playstylePlus: z.boolean().optional(),
  popularity: z.boolean().optional(),
  position: z.boolean().optional(),
  positionAffinity: z.boolean().optional(),
  price: z.boolean().optional(),
  priceTrend: z.boolean().optional(),
  rating: z.boolean().optional(),
  shooting: z.boolean().optional(),
  skillMoves: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  weakFoot: z.boolean().optional(),
}).strict()

// SCRAPED PAGE
//------------------------------------------------------

export const ScrapedPageArgsSchema: z.ZodType<Prisma.ScrapedPageDefaultArgs> = z.object({
  select: z.lazy(() => ScrapedPageSelectSchema).optional(),
}).strict();

export const ScrapedPageSelectSchema: z.ZodType<Prisma.ScrapedPageSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  pageNumber: z.boolean().optional(),
  type: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  url: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PlayerWhereInputSchema: z.ZodType<Prisma.PlayerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlayerWhereInputSchema),z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerWhereInputSchema),z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accelerateType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alternatePosition: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  club: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  defending: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  dribbling: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  futbinId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  futbinPlayerUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  inGameStats: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  league: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nation: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pace: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  passing: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  physicality: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  playerType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  playstylePlus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  popularity: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  position: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  positionAffinity: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  priceTrend: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  shooting: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  skillMoves: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  weakFoot: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
}).strict();

export const PlayerOrderByWithRelationInputSchema: z.ZodType<Prisma.PlayerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accelerateType: z.lazy(() => SortOrderSchema).optional(),
  alternatePosition: z.lazy(() => SortOrderSchema).optional(),
  club: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  defending: z.lazy(() => SortOrderSchema).optional(),
  dribbling: z.lazy(() => SortOrderSchema).optional(),
  futbinId: z.lazy(() => SortOrderSchema).optional(),
  futbinPlayerUrl: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  inGameStats: z.lazy(() => SortOrderSchema).optional(),
  league: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nation: z.lazy(() => SortOrderSchema).optional(),
  pace: z.lazy(() => SortOrderSchema).optional(),
  passing: z.lazy(() => SortOrderSchema).optional(),
  physicality: z.lazy(() => SortOrderSchema).optional(),
  playerType: z.lazy(() => SortOrderSchema).optional(),
  playstylePlus: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  positionAffinity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  priceTrend: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  shooting: z.lazy(() => SortOrderSchema).optional(),
  skillMoves: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  weakFoot: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerWhereUniqueInputSchema: z.ZodType<Prisma.PlayerWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => PlayerWhereInputSchema),z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerWhereInputSchema),z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  accelerateType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alternatePosition: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  club: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  defending: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  dribbling: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  futbinId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  futbinPlayerUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  inGameStats: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  league: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nation: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pace: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  passing: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  physicality: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  playerType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  playstylePlus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  popularity: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  position: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  positionAffinity: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  priceTrend: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  shooting: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  skillMoves: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  weakFoot: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
}).strict());

export const PlayerOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlayerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accelerateType: z.lazy(() => SortOrderSchema).optional(),
  alternatePosition: z.lazy(() => SortOrderSchema).optional(),
  club: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  defending: z.lazy(() => SortOrderSchema).optional(),
  dribbling: z.lazy(() => SortOrderSchema).optional(),
  futbinId: z.lazy(() => SortOrderSchema).optional(),
  futbinPlayerUrl: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  inGameStats: z.lazy(() => SortOrderSchema).optional(),
  league: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nation: z.lazy(() => SortOrderSchema).optional(),
  pace: z.lazy(() => SortOrderSchema).optional(),
  passing: z.lazy(() => SortOrderSchema).optional(),
  physicality: z.lazy(() => SortOrderSchema).optional(),
  playerType: z.lazy(() => SortOrderSchema).optional(),
  playstylePlus: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  positionAffinity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  priceTrend: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  shooting: z.lazy(() => SortOrderSchema).optional(),
  skillMoves: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  weakFoot: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PlayerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PlayerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PlayerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PlayerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PlayerSumOrderByAggregateInputSchema).optional()
}).strict();

export const PlayerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlayerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accelerateType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  alternatePosition: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  club: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  defending: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  dribbling: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  futbinId: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  futbinPlayerUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  height: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  inGameStats: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  league: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nation: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pace: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  passing: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  physicality: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  playerType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  playstylePlus: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  popularity: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  position: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  positionAffinity: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  priceTrend: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  shooting: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  skillMoves: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  weakFoot: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
}).strict();

export const ScrapedPageWhereInputSchema: z.ZodType<Prisma.ScrapedPageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ScrapedPageWhereInputSchema),z.lazy(() => ScrapedPageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScrapedPageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScrapedPageWhereInputSchema),z.lazy(() => ScrapedPageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pageNumber: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ScrapedPageOrderByWithRelationInputSchema: z.ZodType<Prisma.ScrapedPageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScrapedPageWhereUniqueInputSchema: z.ZodType<Prisma.ScrapedPageWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ScrapedPageWhereInputSchema),z.lazy(() => ScrapedPageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScrapedPageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScrapedPageWhereInputSchema),z.lazy(() => ScrapedPageWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pageNumber: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const ScrapedPageOrderByWithAggregationInputSchema: z.ZodType<Prisma.ScrapedPageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ScrapedPageCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ScrapedPageAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ScrapedPageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ScrapedPageMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ScrapedPageSumOrderByAggregateInputSchema).optional()
}).strict();

export const ScrapedPageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ScrapedPageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ScrapedPageScalarWhereWithAggregatesInputSchema),z.lazy(() => ScrapedPageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScrapedPageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScrapedPageScalarWhereWithAggregatesInputSchema),z.lazy(() => ScrapedPageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  pageNumber: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PlayerCreateInputSchema: z.ZodType<Prisma.PlayerCreateInput> = z.object({
  id: z.string().optional(),
  accelerateType: z.string(),
  alternatePosition: z.string(),
  club: z.string(),
  createdAt: z.coerce.date(),
  defending: z.bigint(),
  dribbling: z.bigint(),
  futbinId: z.bigint(),
  futbinPlayerUrl: z.string(),
  height: z.string(),
  imageUrl: z.string(),
  inGameStats: z.bigint(),
  league: z.string(),
  name: z.string(),
  nation: z.string(),
  pace: z.bigint(),
  passing: z.bigint(),
  physicality: z.bigint(),
  playerType: z.string(),
  playstylePlus: z.string(),
  popularity: z.bigint(),
  position: z.string(),
  positionAffinity: z.string().optional().nullable(),
  price: z.bigint(),
  priceTrend: z.string(),
  rating: z.bigint(),
  shooting: z.bigint(),
  skillMoves: z.bigint(),
  updatedAt: z.coerce.date(),
  weakFoot: z.bigint()
}).strict();

export const PlayerUncheckedCreateInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  accelerateType: z.string(),
  alternatePosition: z.string(),
  club: z.string(),
  createdAt: z.coerce.date(),
  defending: z.bigint(),
  dribbling: z.bigint(),
  futbinId: z.bigint(),
  futbinPlayerUrl: z.string(),
  height: z.string(),
  imageUrl: z.string(),
  inGameStats: z.bigint(),
  league: z.string(),
  name: z.string(),
  nation: z.string(),
  pace: z.bigint(),
  passing: z.bigint(),
  physicality: z.bigint(),
  playerType: z.string(),
  playstylePlus: z.string(),
  popularity: z.bigint(),
  position: z.string(),
  positionAffinity: z.string().optional().nullable(),
  price: z.bigint(),
  priceTrend: z.string(),
  rating: z.bigint(),
  shooting: z.bigint(),
  skillMoves: z.bigint(),
  updatedAt: z.coerce.date(),
  weakFoot: z.bigint()
}).strict();

export const PlayerUpdateInputSchema: z.ZodType<Prisma.PlayerUpdateInput> = z.object({
  accelerateType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alternatePosition: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  defending: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dribbling: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinPlayerUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inGameStats: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  league: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pace: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  passing: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  physicality: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  playerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playstylePlus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  popularity: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  positionAffinity: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  priceTrend: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  shooting: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  skillMoves: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weakFoot: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlayerUncheckedUpdateInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateInput> = z.object({
  accelerateType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alternatePosition: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  defending: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dribbling: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinPlayerUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inGameStats: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  league: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pace: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  passing: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  physicality: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  playerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playstylePlus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  popularity: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  positionAffinity: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  priceTrend: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  shooting: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  skillMoves: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weakFoot: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlayerCreateManyInputSchema: z.ZodType<Prisma.PlayerCreateManyInput> = z.object({
  id: z.string().optional(),
  accelerateType: z.string(),
  alternatePosition: z.string(),
  club: z.string(),
  createdAt: z.coerce.date(),
  defending: z.bigint(),
  dribbling: z.bigint(),
  futbinId: z.bigint(),
  futbinPlayerUrl: z.string(),
  height: z.string(),
  imageUrl: z.string(),
  inGameStats: z.bigint(),
  league: z.string(),
  name: z.string(),
  nation: z.string(),
  pace: z.bigint(),
  passing: z.bigint(),
  physicality: z.bigint(),
  playerType: z.string(),
  playstylePlus: z.string(),
  popularity: z.bigint(),
  position: z.string(),
  positionAffinity: z.string().optional().nullable(),
  price: z.bigint(),
  priceTrend: z.string(),
  rating: z.bigint(),
  shooting: z.bigint(),
  skillMoves: z.bigint(),
  updatedAt: z.coerce.date(),
  weakFoot: z.bigint()
}).strict();

export const PlayerUpdateManyMutationInputSchema: z.ZodType<Prisma.PlayerUpdateManyMutationInput> = z.object({
  accelerateType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alternatePosition: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  defending: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dribbling: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinPlayerUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inGameStats: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  league: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pace: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  passing: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  physicality: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  playerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playstylePlus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  popularity: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  positionAffinity: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  priceTrend: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  shooting: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  skillMoves: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weakFoot: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlayerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyInput> = z.object({
  accelerateType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alternatePosition: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  defending: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  dribbling: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  futbinPlayerUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inGameStats: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  league: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nation: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pace: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  passing: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  physicality: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  playerType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playstylePlus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  popularity: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  positionAffinity: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  priceTrend: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  shooting: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  skillMoves: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weakFoot: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScrapedPageCreateInputSchema: z.ZodType<Prisma.ScrapedPageCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date(),
  pageNumber: z.bigint(),
  type: z.string(),
  updatedAt: z.coerce.date(),
  url: z.string()
}).strict();

export const ScrapedPageUncheckedCreateInputSchema: z.ZodType<Prisma.ScrapedPageUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date(),
  pageNumber: z.bigint(),
  type: z.string(),
  updatedAt: z.coerce.date(),
  url: z.string()
}).strict();

export const ScrapedPageUpdateInputSchema: z.ZodType<Prisma.ScrapedPageUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScrapedPageUncheckedUpdateInputSchema: z.ZodType<Prisma.ScrapedPageUncheckedUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScrapedPageCreateManyInputSchema: z.ZodType<Prisma.ScrapedPageCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date(),
  pageNumber: z.bigint(),
  type: z.string(),
  updatedAt: z.coerce.date(),
  url: z.string()
}).strict();

export const ScrapedPageUpdateManyMutationInputSchema: z.ZodType<Prisma.ScrapedPageUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScrapedPageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ScrapedPageUncheckedUpdateManyInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pageNumber: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const PlayerCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accelerateType: z.lazy(() => SortOrderSchema).optional(),
  alternatePosition: z.lazy(() => SortOrderSchema).optional(),
  club: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  defending: z.lazy(() => SortOrderSchema).optional(),
  dribbling: z.lazy(() => SortOrderSchema).optional(),
  futbinId: z.lazy(() => SortOrderSchema).optional(),
  futbinPlayerUrl: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  inGameStats: z.lazy(() => SortOrderSchema).optional(),
  league: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nation: z.lazy(() => SortOrderSchema).optional(),
  pace: z.lazy(() => SortOrderSchema).optional(),
  passing: z.lazy(() => SortOrderSchema).optional(),
  physicality: z.lazy(() => SortOrderSchema).optional(),
  playerType: z.lazy(() => SortOrderSchema).optional(),
  playstylePlus: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  positionAffinity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  priceTrend: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  shooting: z.lazy(() => SortOrderSchema).optional(),
  skillMoves: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  weakFoot: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerAvgOrderByAggregateInput> = z.object({
  defending: z.lazy(() => SortOrderSchema).optional(),
  dribbling: z.lazy(() => SortOrderSchema).optional(),
  futbinId: z.lazy(() => SortOrderSchema).optional(),
  inGameStats: z.lazy(() => SortOrderSchema).optional(),
  pace: z.lazy(() => SortOrderSchema).optional(),
  passing: z.lazy(() => SortOrderSchema).optional(),
  physicality: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  shooting: z.lazy(() => SortOrderSchema).optional(),
  skillMoves: z.lazy(() => SortOrderSchema).optional(),
  weakFoot: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accelerateType: z.lazy(() => SortOrderSchema).optional(),
  alternatePosition: z.lazy(() => SortOrderSchema).optional(),
  club: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  defending: z.lazy(() => SortOrderSchema).optional(),
  dribbling: z.lazy(() => SortOrderSchema).optional(),
  futbinId: z.lazy(() => SortOrderSchema).optional(),
  futbinPlayerUrl: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  inGameStats: z.lazy(() => SortOrderSchema).optional(),
  league: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nation: z.lazy(() => SortOrderSchema).optional(),
  pace: z.lazy(() => SortOrderSchema).optional(),
  passing: z.lazy(() => SortOrderSchema).optional(),
  physicality: z.lazy(() => SortOrderSchema).optional(),
  playerType: z.lazy(() => SortOrderSchema).optional(),
  playstylePlus: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  positionAffinity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  priceTrend: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  shooting: z.lazy(() => SortOrderSchema).optional(),
  skillMoves: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  weakFoot: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accelerateType: z.lazy(() => SortOrderSchema).optional(),
  alternatePosition: z.lazy(() => SortOrderSchema).optional(),
  club: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  defending: z.lazy(() => SortOrderSchema).optional(),
  dribbling: z.lazy(() => SortOrderSchema).optional(),
  futbinId: z.lazy(() => SortOrderSchema).optional(),
  futbinPlayerUrl: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  inGameStats: z.lazy(() => SortOrderSchema).optional(),
  league: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nation: z.lazy(() => SortOrderSchema).optional(),
  pace: z.lazy(() => SortOrderSchema).optional(),
  passing: z.lazy(() => SortOrderSchema).optional(),
  physicality: z.lazy(() => SortOrderSchema).optional(),
  playerType: z.lazy(() => SortOrderSchema).optional(),
  playstylePlus: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  positionAffinity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  priceTrend: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  shooting: z.lazy(() => SortOrderSchema).optional(),
  skillMoves: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  weakFoot: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerSumOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerSumOrderByAggregateInput> = z.object({
  defending: z.lazy(() => SortOrderSchema).optional(),
  dribbling: z.lazy(() => SortOrderSchema).optional(),
  futbinId: z.lazy(() => SortOrderSchema).optional(),
  inGameStats: z.lazy(() => SortOrderSchema).optional(),
  pace: z.lazy(() => SortOrderSchema).optional(),
  passing: z.lazy(() => SortOrderSchema).optional(),
  physicality: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  shooting: z.lazy(() => SortOrderSchema).optional(),
  skillMoves: z.lazy(() => SortOrderSchema).optional(),
  weakFoot: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const ScrapedPageCountOrderByAggregateInputSchema: z.ZodType<Prisma.ScrapedPageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScrapedPageAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ScrapedPageAvgOrderByAggregateInput> = z.object({
  pageNumber: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScrapedPageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ScrapedPageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScrapedPageMinOrderByAggregateInputSchema: z.ZodType<Prisma.ScrapedPageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScrapedPageSumOrderByAggregateInputSchema: z.ZodType<Prisma.ScrapedPageSumOrderByAggregateInput> = z.object({
  pageNumber: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PlayerFindFirstArgsSchema: z.ZodType<Prisma.PlayerFindFirstArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlayerScalarFieldEnumSchema,PlayerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlayerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindFirstOrThrowArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlayerScalarFieldEnumSchema,PlayerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlayerFindManyArgsSchema: z.ZodType<Prisma.PlayerFindManyArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlayerScalarFieldEnumSchema,PlayerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlayerAggregateArgsSchema: z.ZodType<Prisma.PlayerAggregateArgs> = z.object({
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlayerGroupByArgsSchema: z.ZodType<Prisma.PlayerGroupByArgs> = z.object({
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithAggregationInputSchema.array(),PlayerOrderByWithAggregationInputSchema ]).optional(),
  by: PlayerScalarFieldEnumSchema.array(),
  having: PlayerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlayerFindUniqueArgsSchema: z.ZodType<Prisma.PlayerFindUniqueArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
}).strict() ;

export const PlayerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindUniqueOrThrowArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
}).strict() ;

export const ScrapedPageFindFirstArgsSchema: z.ZodType<Prisma.ScrapedPageFindFirstArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  where: ScrapedPageWhereInputSchema.optional(),
  orderBy: z.union([ ScrapedPageOrderByWithRelationInputSchema.array(),ScrapedPageOrderByWithRelationInputSchema ]).optional(),
  cursor: ScrapedPageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ScrapedPageScalarFieldEnumSchema,ScrapedPageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ScrapedPageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ScrapedPageFindFirstOrThrowArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  where: ScrapedPageWhereInputSchema.optional(),
  orderBy: z.union([ ScrapedPageOrderByWithRelationInputSchema.array(),ScrapedPageOrderByWithRelationInputSchema ]).optional(),
  cursor: ScrapedPageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ScrapedPageScalarFieldEnumSchema,ScrapedPageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ScrapedPageFindManyArgsSchema: z.ZodType<Prisma.ScrapedPageFindManyArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  where: ScrapedPageWhereInputSchema.optional(),
  orderBy: z.union([ ScrapedPageOrderByWithRelationInputSchema.array(),ScrapedPageOrderByWithRelationInputSchema ]).optional(),
  cursor: ScrapedPageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ScrapedPageScalarFieldEnumSchema,ScrapedPageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ScrapedPageAggregateArgsSchema: z.ZodType<Prisma.ScrapedPageAggregateArgs> = z.object({
  where: ScrapedPageWhereInputSchema.optional(),
  orderBy: z.union([ ScrapedPageOrderByWithRelationInputSchema.array(),ScrapedPageOrderByWithRelationInputSchema ]).optional(),
  cursor: ScrapedPageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ScrapedPageGroupByArgsSchema: z.ZodType<Prisma.ScrapedPageGroupByArgs> = z.object({
  where: ScrapedPageWhereInputSchema.optional(),
  orderBy: z.union([ ScrapedPageOrderByWithAggregationInputSchema.array(),ScrapedPageOrderByWithAggregationInputSchema ]).optional(),
  by: ScrapedPageScalarFieldEnumSchema.array(),
  having: ScrapedPageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ScrapedPageFindUniqueArgsSchema: z.ZodType<Prisma.ScrapedPageFindUniqueArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  where: ScrapedPageWhereUniqueInputSchema,
}).strict() ;

export const ScrapedPageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ScrapedPageFindUniqueOrThrowArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  where: ScrapedPageWhereUniqueInputSchema,
}).strict() ;

export const PlayerCreateArgsSchema: z.ZodType<Prisma.PlayerCreateArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  data: z.union([ PlayerCreateInputSchema,PlayerUncheckedCreateInputSchema ]),
}).strict() ;

export const PlayerUpsertArgsSchema: z.ZodType<Prisma.PlayerUpsertArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
  create: z.union([ PlayerCreateInputSchema,PlayerUncheckedCreateInputSchema ]),
  update: z.union([ PlayerUpdateInputSchema,PlayerUncheckedUpdateInputSchema ]),
}).strict() ;

export const PlayerCreateManyArgsSchema: z.ZodType<Prisma.PlayerCreateManyArgs> = z.object({
  data: z.union([ PlayerCreateManyInputSchema,PlayerCreateManyInputSchema.array() ]),
}).strict() ;

export const PlayerDeleteArgsSchema: z.ZodType<Prisma.PlayerDeleteArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
}).strict() ;

export const PlayerUpdateArgsSchema: z.ZodType<Prisma.PlayerUpdateArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  data: z.union([ PlayerUpdateInputSchema,PlayerUncheckedUpdateInputSchema ]),
  where: PlayerWhereUniqueInputSchema,
}).strict() ;

export const PlayerUpdateManyArgsSchema: z.ZodType<Prisma.PlayerUpdateManyArgs> = z.object({
  data: z.union([ PlayerUpdateManyMutationInputSchema,PlayerUncheckedUpdateManyInputSchema ]),
  where: PlayerWhereInputSchema.optional(),
}).strict() ;

export const PlayerDeleteManyArgsSchema: z.ZodType<Prisma.PlayerDeleteManyArgs> = z.object({
  where: PlayerWhereInputSchema.optional(),
}).strict() ;

export const ScrapedPageCreateArgsSchema: z.ZodType<Prisma.ScrapedPageCreateArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  data: z.union([ ScrapedPageCreateInputSchema,ScrapedPageUncheckedCreateInputSchema ]),
}).strict() ;

export const ScrapedPageUpsertArgsSchema: z.ZodType<Prisma.ScrapedPageUpsertArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  where: ScrapedPageWhereUniqueInputSchema,
  create: z.union([ ScrapedPageCreateInputSchema,ScrapedPageUncheckedCreateInputSchema ]),
  update: z.union([ ScrapedPageUpdateInputSchema,ScrapedPageUncheckedUpdateInputSchema ]),
}).strict() ;

export const ScrapedPageCreateManyArgsSchema: z.ZodType<Prisma.ScrapedPageCreateManyArgs> = z.object({
  data: z.union([ ScrapedPageCreateManyInputSchema,ScrapedPageCreateManyInputSchema.array() ]),
}).strict() ;

export const ScrapedPageDeleteArgsSchema: z.ZodType<Prisma.ScrapedPageDeleteArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  where: ScrapedPageWhereUniqueInputSchema,
}).strict() ;

export const ScrapedPageUpdateArgsSchema: z.ZodType<Prisma.ScrapedPageUpdateArgs> = z.object({
  select: ScrapedPageSelectSchema.optional(),
  data: z.union([ ScrapedPageUpdateInputSchema,ScrapedPageUncheckedUpdateInputSchema ]),
  where: ScrapedPageWhereUniqueInputSchema,
}).strict() ;

export const ScrapedPageUpdateManyArgsSchema: z.ZodType<Prisma.ScrapedPageUpdateManyArgs> = z.object({
  data: z.union([ ScrapedPageUpdateManyMutationInputSchema,ScrapedPageUncheckedUpdateManyInputSchema ]),
  where: ScrapedPageWhereInputSchema.optional(),
}).strict() ;

export const ScrapedPageDeleteManyArgsSchema: z.ZodType<Prisma.ScrapedPageDeleteManyArgs> = z.object({
  where: ScrapedPageWhereInputSchema.optional(),
}).strict() ;