class Api::ListItemsController < ApplicationController
  def create
    @list_item = ListItem.new(list_item_params)
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
  end

  def destroy
    @list_item = ListItem.find(params[:id])
    @list_item.destroy
  end

  def list_item_params
    params.require(:list_item).permit(:title, :list_id, :edible_id, :rating, :review, :eaten_at, :created_at)
  end
end
