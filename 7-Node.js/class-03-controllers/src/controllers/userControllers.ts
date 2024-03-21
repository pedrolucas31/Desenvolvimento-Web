import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    try {
      const { id, name, age } = req.body;

      if (id && name && age) {
        console.log(a);
        
        return res.json({ status: `user ${id} created!` });
      }

      throw res.json({ status: `user not created!` });
    } catch (error) {
      console.log(error);
    }
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ user: id });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, age } = req.body;

    if (id && name && age) {
      console.log("updated", { id, name, age });
      res.json({ status: `user ${id} updated!` });
      return;
    }

    res.json({ status: "user not updated!" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.json({});
  },
};
