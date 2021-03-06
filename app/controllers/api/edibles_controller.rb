class Api::EdiblesController < ApplicationController
  def index
    @edibles = Edible.all
    render :index
  end

  def show
    @edible = Edible.find(params[:id])
    render :show
  end

  def edible_params
    params.require(:edible).permit(:name, :description, :category, :image_url)
  end
end
