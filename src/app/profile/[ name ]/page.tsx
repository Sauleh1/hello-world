export const generateStaticParams = () => {
    return [
        {
            name: "Sauleh"
        },
        {
            name: "Hira"
        },
        {
            name: "Sonia"
        }
    ]
}

const NamePage = (props: any) => {
    props.params.name
    console.log(props.params.name)

    return (
        <>
            <h1>
                {props.params.name}s profile page
            </h1>
        </>
    )
}

export default NamePage

const Object = {
    params: { name: "Hira" },
    // searchParams: {}
}

Object.params.name