import {gql} from "@apollo/client";
import {FavoriteType} from "./FavoriteMutations";
import {COMMENT_FRAGMENT} from "../fragments/CommentFragments";

export interface CreateCommentResp {
    createComment: {
        commentId: number
        movieDBId: number
        submitterId: number
        favoriteType: FavoriteType
        title: string
        description: string
        creationDate: Date
    }
}

export interface CreateCommentVars {
    movieDBId: number
    userId: number
    favoriteType: FavoriteType
    title: string
    description: string
}

const CREATE_COMMENT = gql`
    mutation createComment(
        $movieDBId: Int
        $userId: Int
        $favoriteType: FavoriteType
        $title: String
        $description: String
    ) {
        createComment(
            form: {
                movieDBId: $movieDBId
                userId: $userId
                favoriteType: $favoriteType
                title: $title
                description: $description
            }
        ) {
            ...CommentFragment
        }
    }
    ${COMMENT_FRAGMENT}
`

interface UpdateCommentVars {
    commentId: number,
    title: string,
    description: string
}

const UPDATE_COMMENT = gql`
    mutation updateComment($commentId: Int, $title: String, $description: String) {
        updateComment(
            form: { commentId: $commentId, title: $title, description: $description }
        ) {
            ...CommentFragment
        }
    }
    ${COMMENT_FRAGMENT}
`

interface DeleteCommentVars {
    id: number
}

const DELETE_COMMENT = gql`
    mutation deleteComment($id: Int) {
        deleteComment(id: $id) {
            message
        }
    }
`
export {CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT}