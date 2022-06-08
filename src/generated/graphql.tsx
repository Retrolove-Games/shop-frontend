import { gql } from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_categories_item?: Maybe<Categories>;
  create_categories_items?: Maybe<Array<Maybe<Categories>>>;
  create_menu_items_item?: Maybe<Menu_Items>;
  create_menu_items_items?: Maybe<Array<Maybe<Menu_Items>>>;
  create_menu_items_menu_items_item?: Maybe<Menu_Items_Menu_Items>;
  create_menu_items_menu_items_items?: Maybe<Array<Maybe<Menu_Items_Menu_Items>>>;
  create_menus_item?: Maybe<Menus>;
  create_menus_items?: Maybe<Array<Maybe<Menus>>>;
  create_menus_menu_items_item?: Maybe<Menus_Menu_Items>;
  create_menus_menu_items_items?: Maybe<Array<Maybe<Menus_Menu_Items>>>;
  create_products_categories_item?: Maybe<Products_Categories>;
  create_products_categories_items?: Maybe<Array<Maybe<Products_Categories>>>;
  create_products_item?: Maybe<Products>;
  create_products_items?: Maybe<Array<Maybe<Products>>>;
  delete_categories_item?: Maybe<Delete_One>;
  delete_categories_items?: Maybe<Delete_Many>;
  delete_menu_items_item?: Maybe<Delete_One>;
  delete_menu_items_items?: Maybe<Delete_Many>;
  delete_menu_items_menu_items_item?: Maybe<Delete_One>;
  delete_menu_items_menu_items_items?: Maybe<Delete_Many>;
  delete_menus_item?: Maybe<Delete_One>;
  delete_menus_items?: Maybe<Delete_Many>;
  delete_menus_menu_items_item?: Maybe<Delete_One>;
  delete_menus_menu_items_items?: Maybe<Delete_Many>;
  delete_products_categories_item?: Maybe<Delete_One>;
  delete_products_categories_items?: Maybe<Delete_Many>;
  delete_products_item?: Maybe<Delete_One>;
  delete_products_items?: Maybe<Delete_Many>;
  update_categories_item?: Maybe<Categories>;
  update_categories_items?: Maybe<Array<Maybe<Categories>>>;
  update_menu_items_item?: Maybe<Menu_Items>;
  update_menu_items_items?: Maybe<Array<Maybe<Menu_Items>>>;
  update_menu_items_menu_items_item?: Maybe<Menu_Items_Menu_Items>;
  update_menu_items_menu_items_items?: Maybe<Array<Maybe<Menu_Items_Menu_Items>>>;
  update_menus_item?: Maybe<Menus>;
  update_menus_items?: Maybe<Array<Maybe<Menus>>>;
  update_menus_menu_items_item?: Maybe<Menus_Menu_Items>;
  update_menus_menu_items_items?: Maybe<Array<Maybe<Menus_Menu_Items>>>;
  update_products_categories_item?: Maybe<Products_Categories>;
  update_products_categories_items?: Maybe<Array<Maybe<Products_Categories>>>;
  update_products_item?: Maybe<Products>;
  update_products_items?: Maybe<Array<Maybe<Products>>>;
};


export type MutationCreate_Categories_ItemArgs = {
  data: Create_Categories_Input;
};


export type MutationCreate_Categories_ItemsArgs = {
  data?: InputMaybe<Array<Create_Categories_Input>>;
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Menu_Items_ItemArgs = {
  data: Create_Menu_Items_Input;
};


export type MutationCreate_Menu_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menu_Items_Input>>;
  filter?: InputMaybe<Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Menu_Items_Menu_Items_ItemArgs = {
  data: Create_Menu_Items_Menu_Items_Input;
};


export type MutationCreate_Menu_Items_Menu_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menu_Items_Menu_Items_Input>>;
  filter?: InputMaybe<Menu_Items_Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Menus_ItemArgs = {
  data: Create_Menus_Input;
};


export type MutationCreate_Menus_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menus_Input>>;
  filter?: InputMaybe<Menus_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Menus_Menu_Items_ItemArgs = {
  data: Create_Menus_Menu_Items_Input;
};


export type MutationCreate_Menus_Menu_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menus_Menu_Items_Input>>;
  filter?: InputMaybe<Menus_Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Products_Categories_ItemArgs = {
  data: Create_Products_Categories_Input;
};


export type MutationCreate_Products_Categories_ItemsArgs = {
  data?: InputMaybe<Array<Create_Products_Categories_Input>>;
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Products_ItemArgs = {
  data: Create_Products_Input;
};


export type MutationCreate_Products_ItemsArgs = {
  data?: InputMaybe<Array<Create_Products_Input>>;
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Categories_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Categories_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Menu_Items_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Menu_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Menu_Items_Menu_Items_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Menu_Items_Menu_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Menus_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Menus_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Menus_Menu_Items_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Menus_Menu_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Products_Categories_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Products_Categories_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Products_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Products_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Categories_ItemArgs = {
  data: Update_Categories_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Categories_ItemsArgs = {
  data: Update_Categories_Input;
  filter?: InputMaybe<Categories_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Menu_Items_ItemArgs = {
  data: Update_Menu_Items_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Menu_Items_ItemsArgs = {
  data: Update_Menu_Items_Input;
  filter?: InputMaybe<Menu_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Menu_Items_Menu_Items_ItemArgs = {
  data: Update_Menu_Items_Menu_Items_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Menu_Items_Menu_Items_ItemsArgs = {
  data: Update_Menu_Items_Menu_Items_Input;
  filter?: InputMaybe<Menu_Items_Menu_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Menus_ItemArgs = {
  data: Update_Menus_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Menus_ItemsArgs = {
  data: Update_Menus_Input;
  filter?: InputMaybe<Menus_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Menus_Menu_Items_ItemArgs = {
  data: Update_Menus_Menu_Items_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Menus_Menu_Items_ItemsArgs = {
  data: Update_Menus_Menu_Items_Input;
  filter?: InputMaybe<Menus_Menu_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_Categories_ItemArgs = {
  data: Update_Products_Categories_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Products_Categories_ItemsArgs = {
  data: Update_Products_Categories_Input;
  filter?: InputMaybe<Products_Categories_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Products_ItemArgs = {
  data: Update_Products_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Products_ItemsArgs = {
  data: Update_Products_Input;
  filter?: InputMaybe<Products_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Categories>>>;
  categories_aggregated?: Maybe<Array<Maybe<Categories_Aggregated>>>;
  categories_by_id?: Maybe<Categories>;
  menu_items?: Maybe<Array<Maybe<Menu_Items>>>;
  menu_items_aggregated?: Maybe<Array<Maybe<Menu_Items_Aggregated>>>;
  menu_items_by_id?: Maybe<Menu_Items>;
  menu_items_menu_items?: Maybe<Array<Maybe<Menu_Items_Menu_Items>>>;
  menu_items_menu_items_aggregated?: Maybe<Array<Maybe<Menu_Items_Menu_Items_Aggregated>>>;
  menu_items_menu_items_by_id?: Maybe<Menu_Items_Menu_Items>;
  menus?: Maybe<Array<Maybe<Menus>>>;
  menus_aggregated?: Maybe<Array<Maybe<Menus_Aggregated>>>;
  menus_by_id?: Maybe<Menus>;
  menus_menu_items?: Maybe<Array<Maybe<Menus_Menu_Items>>>;
  menus_menu_items_aggregated?: Maybe<Array<Maybe<Menus_Menu_Items_Aggregated>>>;
  menus_menu_items_by_id?: Maybe<Menus_Menu_Items>;
  products?: Maybe<Array<Maybe<Products>>>;
  products_aggregated?: Maybe<Array<Maybe<Products_Aggregated>>>;
  products_by_id?: Maybe<Products>;
  products_categories?: Maybe<Array<Maybe<Products_Categories>>>;
  products_categories_aggregated?: Maybe<Array<Maybe<Products_Categories_Aggregated>>>;
  products_categories_by_id?: Maybe<Products_Categories>;
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategories_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryMenu_ItemsArgs = {
  filter?: InputMaybe<Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenu_Items_AggregatedArgs = {
  filter?: InputMaybe<Menu_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenu_Items_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryMenu_Items_Menu_ItemsArgs = {
  filter?: InputMaybe<Menu_Items_Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenu_Items_Menu_Items_AggregatedArgs = {
  filter?: InputMaybe<Menu_Items_Menu_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenu_Items_Menu_Items_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryMenusArgs = {
  filter?: InputMaybe<Menus_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenus_AggregatedArgs = {
  filter?: InputMaybe<Menus_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenus_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryMenus_Menu_ItemsArgs = {
  filter?: InputMaybe<Menus_Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenus_Menu_Items_AggregatedArgs = {
  filter?: InputMaybe<Menus_Menu_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenus_Menu_Items_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_AggregatedArgs = {
  filter?: InputMaybe<Products_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryProducts_CategoriesArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_Categories_AggregatedArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProducts_Categories_By_IdArgs = {
  id: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Categories = {
  __typename?: 'categories';
  category_name?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<Products_Categories>>>;
  products_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CategoriesProductsArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoriesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoriesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Categories_Aggregated = {
  __typename?: 'categories_aggregated';
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Categories_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
};

export type Categories_Aggregated_Count = {
  __typename?: 'categories_aggregated_count';
  category_name?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  products?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Categories_Aggregated_Fields = {
  __typename?: 'categories_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  category_name?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  products?: InputMaybe<Products_Categories_Filter>;
  products_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Count_FunctionsInput = {
  count?: InputMaybe<Scalars['Int']>;
};

export type Create_Categories_Input = {
  category_name?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  products?: InputMaybe<Array<InputMaybe<Create_Products_Categories_Input>>>;
  products_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on: Scalars['Date'];
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Create_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access: Scalars['Date'];
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Create_Menu_Items_Input = {
  child_items?: InputMaybe<Array<InputMaybe<Create_Menu_Items_Menu_Items_Input>>>;
  child_items_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Menu_Items_Menu_Items_Input = {
  id?: InputMaybe<Scalars['ID']>;
  menu_items_id?: InputMaybe<Create_Menu_Items_Input>;
  related_menu_items_id?: InputMaybe<Create_Menu_Items_Input>;
};

export type Create_Menus_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<Create_Menus_Menu_Items_Input>>>;
  items_func?: InputMaybe<Count_FunctionsInput>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Menus_Menu_Items_Input = {
  id?: InputMaybe<Scalars['ID']>;
  menu_items_id?: InputMaybe<Create_Menu_Items_Input>;
  menus_id?: InputMaybe<Create_Menus_Input>;
};

export type Create_Products_Categories_Input = {
  categories_id?: InputMaybe<Create_Categories_Input>;
  id?: InputMaybe<Scalars['ID']>;
  products_id?: InputMaybe<Create_Products_Input>;
};

export type Create_Products_Input = {
  categories?: InputMaybe<Array<InputMaybe<Create_Products_Categories_Input>>>;
  categories_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  price: Scalars['Float'];
  product_description?: InputMaybe<Scalars['String']>;
  product_image?: InputMaybe<Create_Directus_Files_Input>;
  product_name?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  sort?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Datetime_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['String']>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  last_access: Scalars['Date'];
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: Maybe<Directus_Roles>;
  status: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<String_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<String_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<String_Filter_Operators>;
};

export type Menu_Items = {
  __typename?: 'menu_items';
  child_items?: Maybe<Array<Maybe<Menu_Items_Menu_Items>>>;
  child_items_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Menu_ItemsChild_ItemsArgs = {
  filter?: InputMaybe<Menu_Items_Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Menu_ItemsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Menu_ItemsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Menu_Items_Aggregated = {
  __typename?: 'menu_items_aggregated';
  avg?: Maybe<Menu_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Menu_Items_Aggregated_Fields>;
  count?: Maybe<Menu_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Menu_Items_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Menu_Items_Aggregated_Fields>;
  min?: Maybe<Menu_Items_Aggregated_Fields>;
  sum?: Maybe<Menu_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Menu_Items_Aggregated_Fields>;
};

export type Menu_Items_Aggregated_Count = {
  __typename?: 'menu_items_aggregated_count';
  child_items?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Menu_Items_Aggregated_Fields = {
  __typename?: 'menu_items_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Menu_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menu_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Menu_Items_Filter>>>;
  child_items?: InputMaybe<Menu_Items_Menu_Items_Filter>;
  child_items_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  path?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Menu_Items_Menu_Items = {
  __typename?: 'menu_items_menu_items';
  id?: Maybe<Scalars['ID']>;
  menu_items_id?: Maybe<Menu_Items>;
  related_menu_items_id?: Maybe<Menu_Items>;
};


export type Menu_Items_Menu_ItemsMenu_Items_IdArgs = {
  filter?: InputMaybe<Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Menu_Items_Menu_ItemsRelated_Menu_Items_IdArgs = {
  filter?: InputMaybe<Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Menu_Items_Menu_Items_Aggregated = {
  __typename?: 'menu_items_menu_items_aggregated';
  avg?: Maybe<Menu_Items_Menu_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Menu_Items_Menu_Items_Aggregated_Fields>;
  count?: Maybe<Menu_Items_Menu_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Menu_Items_Menu_Items_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Menu_Items_Menu_Items_Aggregated_Fields>;
  min?: Maybe<Menu_Items_Menu_Items_Aggregated_Fields>;
  sum?: Maybe<Menu_Items_Menu_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Menu_Items_Menu_Items_Aggregated_Fields>;
};

export type Menu_Items_Menu_Items_Aggregated_Count = {
  __typename?: 'menu_items_menu_items_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  menu_items_id?: Maybe<Scalars['Int']>;
  related_menu_items_id?: Maybe<Scalars['Int']>;
};

export type Menu_Items_Menu_Items_Aggregated_Fields = {
  __typename?: 'menu_items_menu_items_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  menu_items_id?: Maybe<Scalars['Float']>;
  related_menu_items_id?: Maybe<Scalars['Float']>;
};

export type Menu_Items_Menu_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menu_Items_Menu_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Menu_Items_Menu_Items_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  menu_items_id?: InputMaybe<Menu_Items_Filter>;
  related_menu_items_id?: InputMaybe<Menu_Items_Filter>;
};

export type Menus = {
  __typename?: 'menus';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  items?: Maybe<Array<Maybe<Menus_Menu_Items>>>;
  items_func?: Maybe<Count_Functions>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type MenusItemsArgs = {
  filter?: InputMaybe<Menus_Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MenusUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MenusUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Menus_Aggregated = {
  __typename?: 'menus_aggregated';
  avg?: Maybe<Menus_Aggregated_Fields>;
  avgDistinct?: Maybe<Menus_Aggregated_Fields>;
  count?: Maybe<Menus_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Menus_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Menus_Aggregated_Fields>;
  min?: Maybe<Menus_Aggregated_Fields>;
  sum?: Maybe<Menus_Aggregated_Fields>;
  sumDistinct?: Maybe<Menus_Aggregated_Fields>;
};

export type Menus_Aggregated_Count = {
  __typename?: 'menus_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  items?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Menus_Aggregated_Fields = {
  __typename?: 'menus_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Menus_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menus_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Menus_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  items?: InputMaybe<Menus_Menu_Items_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Menus_Menu_Items = {
  __typename?: 'menus_menu_items';
  id?: Maybe<Scalars['ID']>;
  menu_items_id?: Maybe<Menu_Items>;
  menus_id?: Maybe<Menus>;
};


export type Menus_Menu_ItemsMenu_Items_IdArgs = {
  filter?: InputMaybe<Menu_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Menus_Menu_ItemsMenus_IdArgs = {
  filter?: InputMaybe<Menus_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Menus_Menu_Items_Aggregated = {
  __typename?: 'menus_menu_items_aggregated';
  avg?: Maybe<Menus_Menu_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Menus_Menu_Items_Aggregated_Fields>;
  count?: Maybe<Menus_Menu_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Menus_Menu_Items_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Menus_Menu_Items_Aggregated_Fields>;
  min?: Maybe<Menus_Menu_Items_Aggregated_Fields>;
  sum?: Maybe<Menus_Menu_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Menus_Menu_Items_Aggregated_Fields>;
};

export type Menus_Menu_Items_Aggregated_Count = {
  __typename?: 'menus_menu_items_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  menu_items_id?: Maybe<Scalars['Int']>;
  menus_id?: Maybe<Scalars['Int']>;
};

export type Menus_Menu_Items_Aggregated_Fields = {
  __typename?: 'menus_menu_items_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  menu_items_id?: Maybe<Scalars['Float']>;
  menus_id?: Maybe<Scalars['Float']>;
};

export type Menus_Menu_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menus_Menu_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Menus_Menu_Items_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  menu_items_id?: InputMaybe<Menu_Items_Filter>;
  menus_id?: InputMaybe<Menus_Filter>;
};

export type Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Products = {
  __typename?: 'products';
  categories?: Maybe<Array<Maybe<Products_Categories>>>;
  categories_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  price: Scalars['Float'];
  product_description?: Maybe<Scalars['String']>;
  product_image?: Maybe<Directus_Files>;
  product_name?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type ProductsCategoriesArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductsProduct_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Products_Aggregated = {
  __typename?: 'products_aggregated';
  avg?: Maybe<Products_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Aggregated_Fields>;
  count?: Maybe<Products_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Products_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Products_Aggregated_Fields>;
  min?: Maybe<Products_Aggregated_Fields>;
  sum?: Maybe<Products_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Aggregated_Fields>;
};

export type Products_Aggregated_Count = {
  __typename?: 'products_aggregated_count';
  categories?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  product_description?: Maybe<Scalars['Int']>;
  product_image?: Maybe<Scalars['Int']>;
  product_name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Products_Aggregated_Fields = {
  __typename?: 'products_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Products_Categories = {
  __typename?: 'products_categories';
  categories_id?: Maybe<Categories>;
  id?: Maybe<Scalars['ID']>;
  products_id?: Maybe<Products>;
};


export type Products_CategoriesCategories_IdArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Products_CategoriesProducts_IdArgs = {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Products_Categories_Aggregated = {
  __typename?: 'products_categories_aggregated';
  avg?: Maybe<Products_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
  count?: Maybe<Products_Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Products_Categories_Aggregated_Fields>;
  min?: Maybe<Products_Categories_Aggregated_Fields>;
  sum?: Maybe<Products_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
};

export type Products_Categories_Aggregated_Count = {
  __typename?: 'products_categories_aggregated_count';
  categories_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  products_id?: Maybe<Scalars['Int']>;
};

export type Products_Categories_Aggregated_Fields = {
  __typename?: 'products_categories_aggregated_fields';
  categories_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  products_id?: Maybe<Scalars['Float']>;
};

export type Products_Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  products_id?: InputMaybe<Products_Filter>;
};

export type Products_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  categories?: InputMaybe<Products_Categories_Filter>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  price?: InputMaybe<Number_Filter_Operators>;
  product_description?: InputMaybe<String_Filter_Operators>;
  product_image?: InputMaybe<Directus_Files_Filter>;
  product_name?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Update_Categories_Input = {
  category_name?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  products?: InputMaybe<Array<InputMaybe<Update_Products_Categories_Input>>>;
  products_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Update_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Update_Menu_Items_Input = {
  child_items?: InputMaybe<Array<InputMaybe<Update_Menu_Items_Menu_Items_Input>>>;
  child_items_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Menu_Items_Menu_Items_Input = {
  id?: InputMaybe<Scalars['ID']>;
  menu_items_id?: InputMaybe<Update_Menu_Items_Input>;
  related_menu_items_id?: InputMaybe<Update_Menu_Items_Input>;
};

export type Update_Menus_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<Update_Menus_Menu_Items_Input>>>;
  items_func?: InputMaybe<Count_FunctionsInput>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Menus_Menu_Items_Input = {
  id?: InputMaybe<Scalars['ID']>;
  menu_items_id?: InputMaybe<Update_Menu_Items_Input>;
  menus_id?: InputMaybe<Update_Menus_Input>;
};

export type Update_Products_Categories_Input = {
  categories_id?: InputMaybe<Update_Categories_Input>;
  id?: InputMaybe<Scalars['ID']>;
  products_id?: InputMaybe<Update_Products_Input>;
};

export type Update_Products_Input = {
  categories?: InputMaybe<Array<InputMaybe<Update_Products_Categories_Input>>>;
  categories_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  product_description?: InputMaybe<Scalars['String']>;
  product_image?: InputMaybe<Update_Directus_Files_Input>;
  product_name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};
