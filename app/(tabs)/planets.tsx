import { useState, useEffect } from 'react'
import SWScreen from '@/components/SWScreen';
import List from '@/components/List';
import NavMenu from '@/components/NavMenu';
import BackButton from  '@/components/BackButton';
import Connection from '@/utils/ApiConnection.ts'
import Varios from '@/utils/Varios.ts'

export default function Planets() {
    const utils = new Varios();

    const [data,setData] = useState([]);
    const [part,setPart] = useState("");

    const update = (paramURI:string) =>{
        const con = new Connection();
        con.getPlanet(paramURI).then(dataP=>{
            setData(dataP);
        }).catch(error=>{
            console.log(error);
            setData([]);
        });
    }

    useEffect(()=>{
        update(part)
    },[]);
  return (
    <SWScreen title="PLANETAS">
        <List data={data.results} page="planets"/>
        <NavMenu prev={()=>{
                update(data.previous !== null? utils.recortarString(data.previous,"?"):"")
            }}
            next={()=>{
                update(data.next !== null? utils.recortarString(data.next,"?"):"")
            }}
        />
        <BackButton/>
    </SWScreen>
  );
}