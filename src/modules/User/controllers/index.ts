import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

export const addUser = async (req: Request, res: Response, _next: NextFunction) => {
    try {
        const { name, email, phone } = req.body;
        const data = req.body
        const user =  (await User.create(data));
        return res.status(200).json({ success: true, data: user })
    } catch (error: any) {
        return res.send(400).json({ success: false, error: error.message });
    }
};
