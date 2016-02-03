class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render json: @review
    else
      render json: "Failed to create review."
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def edit
    render :edit
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: "Failed to update review."
    end
  end

  def review_params
    params.require(:review).permit(:user_id, :edible_id, :title, :body)
  end
end
