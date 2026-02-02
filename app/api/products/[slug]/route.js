import wands from "../db"
export async function GET(request, { params }) {
    const { slug } = await params

    const wand = wands.find((wand) => wand.slug === slug)
    return Response.json(wand)

}