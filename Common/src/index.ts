import z from "zod";
export const SignupSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
});

export const SigninSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6)
});

export const  BlogSchema=z.object({
    title:z.string(),
    content:z.string(),

});

export const Updated_blog=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
});





export type Signup_type=z.infer<typeof SignupSchema>

export type Signin_type=z.infer<typeof SigninSchema>

export type Post_type=z.infer<typeof BlogSchema>

export type UpdatedBlog_type=z.infer<typeof Updated_blog>