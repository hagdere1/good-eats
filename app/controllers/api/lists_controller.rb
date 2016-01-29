class Api::ListsController < ApplicationController
  def index
    @lists = List.where("user_id = ?", current_user.id)
  end

  def show
    @list = List.find(params[:id])
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def edit
    @list = List.find(params[:id])
    render :edit
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :show
  end

  def list_params
    params.require(:list).permit(:title, :user_id, :can_delete)
  end
end
