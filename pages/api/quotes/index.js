import {quotes} from '../../../quotes'

export default function handler(req,res) {
    res.status(200).json(quotes)
}
