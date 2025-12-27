export default function Friend({frnd}) {
    const s = {
        border: '2px solid blue',
        padding: '10px',
        margin: '10px'
    }
    const fri = frnd;
    return(
        <div style={s}>
            <h4>Name: {fri.name}</h4>
            <p>Email: {fri.email}</p>
            <p>Phone: {fri.phone}</p>
            <p>Website: {fri.website}</p>
        </div>
    )
}