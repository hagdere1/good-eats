class Api::EdiblesController < ApplicationController
  def index
    @edibles = Edible.all
  end

  def show
    @edible = Edible.find(params[:id])
  end

  def edible_params
    params.require(:edible).permit(:name, :description, :category)
  end
end
