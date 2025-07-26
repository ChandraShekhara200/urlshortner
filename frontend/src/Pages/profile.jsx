import React, { useEffect, useState } from 'react'
import Service from '../utils/http'
import { Avatar,Text } from '@mantine/core';
const service = new Service();
export default function Profile() {
    const [profileData ,setProfileData]=useState(null);

    async function getProfileData(){
        let data =await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }

    useEffect( ()=>{
        getProfileData();
    },[])

  return (
    <div>
        <Avatar src={profileData?.avatar} ></Avatar>
        <Text tt="uppercase">{profileData?.email}</Text>
        <Text tt="capitalize">{profileData?.name}</Text>
    </div>
  )
}
