import wands from './db'
export async function GET() {
    return Response.json(wands)
}

