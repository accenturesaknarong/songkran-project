import axios from "axios";
let response;

async function getWaterFestivalBlessingWord(request_id, session_id, body) {
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/v1/songkran/water-festival/blessing-word`,
        headers: { 
            "Content-Language": "th",
            "request_id": request_id, 
            "session_id": session_id 
        },
        data: body
    })
        .then(res => response = res.data)
        .catch(err => response = err);
    return response;
}

async function getSandPagodaBlessingWord(request_id, session_id, body) {
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/v1/songkran/sand-pagodas`,
        headers: { 
            "Content-type": 'application/json', 
            "request_id": request_id, 
            "session_id": session_id 
        },
        data: body,
    })
        .then(res => response = res.data)
        .catch(err => response = err);
    return response;
}

async function getSandPagodaRandom(request_id, session_id, includeThisSession) {
    await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/v1/songkran/randomSandPagodas?includeThisSession=${includeThisSession}`,
        headers: { 
            "Content-type": 'application/json', 
            "request_id": request_id, 
            "session_id": session_id 
        }
    })
        .then(res => response = res.data)
        .catch(err => response = err);
    return response;
}

export { getWaterFestivalBlessingWord, getSandPagodaBlessingWord, getSandPagodaRandom }