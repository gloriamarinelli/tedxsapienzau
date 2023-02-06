import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM blog WHERE cat=?"
    : "SELECT * FROM blog";

    db.query(q,[req.query.cat], (err,data)=>{
        if(err) return res.send(err)
        return res.status(200).json(data);
    })
};

export const addPost = (req, res) => {
  res.json("fuck111")
};

export const addPost1 = (req, res) => {};

export const getPost = (req, res) => {};

export const deletePost = (req, res) => {};

export const updatePost = (req, res) => {};
