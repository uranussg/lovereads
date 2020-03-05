class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where(book_id: params[:book_id])
        # debugger
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review =Review.new(review_params)
        @review.user_id = current_user.id 
        @review.book_id = params[:book_id]
        if @review.save
            # debugger
            render partial: 'api/reviews/review', object: @review
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review =Review.find_by({user_id: review_params[:user_id], book_id: review_params[:book_id] })
        debugger
        if @review.update(review_params)
            debugger
            render partial: 'api/reviews/review', object: @review
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render partial: 'api/reviews/review', object: @review
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:body, :rate, :user_id,:book_id)
    end
end
