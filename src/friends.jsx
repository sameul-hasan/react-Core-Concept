import { use } from 'react';
import Friend from './Friend';
export default function Friends({dost}) {
    const bondhu = use(dost);
    console.log(bondhu);

    return(
        <>
            <h2> {bondhu.length} Friends Come to Samuel's Journey</h2>
            {
                bondhu.map( frnd => <Friend frnd={frnd}></Friend>)
            }
        </>
    )

}