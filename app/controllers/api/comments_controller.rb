class Api::CommentsController < ApplicationController
    def index
        
        @comments = Review.find(params[:review_id]).comments.includes(:user)
        
    end



    def create
        
        @comment = Comment.new(comment_params)
        @comment.review_id = params[:review_id]
        @comment.user_id = current_user.id
        if @comment.save
            
            render partial: 'api/comments/comment', object: @comment
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def comment_params 
        params.require(:comment).permit(:body)
    end

end
