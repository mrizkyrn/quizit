import React from "react";
import {
   Page,
   Navbar,
   NavRight,
   Link,
   Searchbar,
   Card,
   CardHeader,
   BlockTitle,
   List,
   ListItem,
} from "framework7-react";
import store from "../js/store";

const SearchPage = () => {
   const popularSearches = [
      "Web Development",
      "Database Management",
      "Data Science",
      "Machine Learning",
      "Artificial Intelligence",
      "Computer Vision",
      "Natural Language Processing",
      "Data Mining",
      "Big Data",
   ];
   return (
      <Page name="search">
         <Navbar title="Searchbar">
            <NavRight>
               <Link searchbarEnable=".searchbar-demo" iconIos="f7:search" iconMd="material:search" />
            </NavRight>
            <Searchbar className="searchbar-demo" expandable searchContainer=".search-list" searchIn=".item-title" />
         </Navbar>

         <Card outlineMd className="demo-card-header-pic">
            <CardHeader
               valign="bottom"
               style={{
                  backgroundImage: "url(../assets/images/programming.jpg)",
                  color: "white",
                  height: "100px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
            >
               Discover Quiz
            </CardHeader>
         </Card>

         <BlockTitle>Populer Search</BlockTitle>
         <List dividersIos simpleList strong outline inset>
            {popularSearches.map((term, index) => (
               <ListItem title={term} key={index} />
            ))}
         </List>
      </Page>
   );
};

export default SearchPage;
