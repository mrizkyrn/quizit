import React from "react";
import {
   Page,
   Navbar,
   NavTitle,
   Block,
   BlockTitle,
   List,
   ListItem,
   Button,
   Card,
   CardHeader,
   CardContent,
   CardFooter,
   Link,
   Icon,
} from "framework7-react";
import HeaderTitle from "../components/HeaderTitle";
import Popup from "../components/Popup";

const HomePage = () => (
   <Page name="home">
      {/* Top Navbar */}
      <Navbar sliding={false}>
         <NavTitle>Quizit</NavTitle>
      </Navbar>

      {/* Page content */}
      <HeaderTitle sizeLevel={"h3"} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
         New Quiz
      </HeaderTitle>
      <swiper-container pagination class="demo-swiper-multiple" space-between="50">
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(../assets/images/html.jpg)",
                     backgroundPosition: "center",
                     height: "150px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                  }}
               >
                  HTML Advanced
               </CardHeader>
               <CardContent>
                  <p className="date">Posted on September 21, 2023</p>
               </CardContent>
            </Card>
         </swiper-slide>
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(../assets/images/programming.jpg)",
                     backgroundPosition: "center",
                     height: "150px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                  }}
               >
                  Basic Programming
               </CardHeader>
               <CardContent>
                  <p className="date">Posted on September 19, 2023</p>
               </CardContent>
            </Card>
         </swiper-slide>
      </swiper-container>

      <Card title="Your Latest Quiz">
         <CardContent padding={false}>
            <List mediaList>
               <ListItem title="Data Structures" subtitle="Progress">
                  <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" />
               </ListItem>
               <ListItem title="Object-Oriented Programming" subtitle="Done">
                  <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg" width="44" />
               </ListItem>
               <ListItem title="CSS Basic" subtitle="Done">
                  <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg" width="44" />
               </ListItem>
            </List>
         </CardContent>
         <CardFooter>
            <span>January 20, 2015</span>
            <span>See all...</span>
         </CardFooter>
      </Card>

      <HeaderTitle sizeLevel={"h3"} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
         Recomended For You
      </HeaderTitle>
      <swiper-container pagination class="demo-swiper-multiple" slides-per-view="2">
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
      </swiper-container>

      <HeaderTitle sizeLevel={"h3"} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
         Most Likes
      </HeaderTitle>
      <swiper-container pagination class="demo-swiper-multiple" slides-per-view="2">
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
      </swiper-container>

      <HeaderTitle sizeLevel={"h3"} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
         Most Views
      </HeaderTitle>
      <swiper-container pagination class="demo-swiper-multiple" slides-per-view="2">
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
         <swiper-slide>
            <Card outlineMd className="demo-card-header-pic">
               <CardHeader
                  valign="bottom"
                  style={{
                     backgroundImage: "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
                     backgroundPosition: "center",
                     height: "110px",
                     backgroundSize: "cover",
                     color: "white",
                     alignItems: "end",
                     padding: "0.5rem",
                  }}
               >
                  <HeaderTitle>Database Management</HeaderTitle>
               </CardHeader>
               <CardFooter className="no-padding padding-horizontal">
                  <div>
                  <Icon f7="heart" size="15px" color="blue"></Icon>
                  <Icon f7="bookmark" size="15px" color="blue" style={{marginLeft: "0.4rem"}}></Icon>
                  </div>
                  <p style={{fontSize: "0.8rem", margin: "0"}}>10 Likes</p>
               </CardFooter>
            </Card>
         </swiper-slide>
      </swiper-container>
   </Page>
);
export default HomePage;
