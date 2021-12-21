import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

import axios from "axios";
import Store from "../../../Screens/StoreList/Store";
const Tab = createMaterialTopTabNavigator();

const StoreListNavi = (props) => {
  const curLargeCat = useSelector((state) => state.curLargeCat);
  const MidCatList = useSelector((state) => state.midCatList[curLargeCat]);

  const [storeList, setStoreList] = useState({});

  const url = useSelector((state) => state.url);
  axios.defaults.baseURL = url;

  const getStore = async () => {
    await axios
      .get("/l-categories/" + curLargeCat + "/m-categories/all/stores")
      .then((res) => {
        setStoreList(res.data);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };

  useEffect(() => {
    getStore();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          fontFamily: "Medium",
        },
        indicatorStyle: {
          borderColor: "#ff9933",
          borderWidth: 1,
        },
        scrollEnabled: true,
        tabStyle: {
          width: 90,
        },
        activeTintColor: "#ff9933",
        inactiveTintColor: "gray",
      }}
      initialRouteName={props.title}
      tabBarLabel={{
        focused: false,
      }}
    >
      {MidCatList &&
        MidCatList.map((item) => {
          return (
            <Tab.Screen name={item}>
              {(props) => <Store {...props} data={storeList[item]} />}
            </Tab.Screen>
          );
        })}
    </Tab.Navigator>
  );
};

export default StoreListNavi;
