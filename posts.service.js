import { Model } from "sequelize"
import { postschema } from "../../database/model/posts.model.js"
import { commentschema } from "../../database/model/comments.model.js"





export const create_post = async (body) => {
    let { title, content, userID } = body
    let find_post = await postschema.findOne({ email })
    if (!find_post) {
        await userschema.create({ title, content, userID })
        await existed_user.save()
        return { message: "user added successfuly" }
    }
}
export const delete_post = async (params) => {
    let { id } = params
    let find_post = await postschema.findByPk(id)
    if (find_post) {
        await find_post.destroy()
        return { message: "user deleted successfuly" }
    } else {
        return { message: "user not found" }
    }

}

export const get_post = async () => {

    let find_post = await postschema.findAll({
        include: [
            { Model: "users" }
        ]
    })
    if (find_post.length > 0) {
        return find_post
    } else {
        return { message: "no posts found" }
    }
}
export const get_posts_comment_count = async () => {
    const posts = await postschema.findAll({
        attributes: [
            "id",
            "title",
            "content",
            "userId",
            [sequelize.fn("COUNT", sequelize.col("comments.id")), "commentCount"],
        ],
        include: [
            {
                model: commentschema,
                attributes: [],
            },
        ],
        group: ["user.id"],
    });

    if (posts.length === 0) {
        return { message: "No posts found." }
    }

    return { posts }
};
