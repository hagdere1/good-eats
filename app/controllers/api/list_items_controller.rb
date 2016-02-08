class Api::ListItemsController < ApplicationController
  def create
    @list_item = ListItem.new(list_item_params)
    if @list_item.save
      render json: @list_item
    else
      render json: "Failed to add item to your list."
    end
  end

  def index
    @list_items = ListItem.all
    render :index
  end

  def show
    @list_item = ListItem.find(params[:id])
    render :show
  end

  def edit
  end

  def update
    @list_item = ListItem.find(params[:id])
    if @list_item.update(list_item_params)
      render json: @list_item
    else
      render json: "Error"
    end
  end

  def destroy
    @list_item = ListItem.find(params[:id])
    @list_item.destroy
    render json: @list_item
  end

  def list_item_params
    params.require(:list_item).permit(:list_id, :edible_id, :rating, :review, :eaten_at, :created_at)
  end
end
