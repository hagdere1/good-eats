class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      List.create!(title: "Want to Try", user_id: @user.id, can_delete: false)
      List.create!(title: "Eaten", user_id: @user.id, can_delete: false)
      render :show
    else
      render json: "Login failed."
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  protected

  def user_params
    self.params.require(:user).permit(:email, :name, :password)
  end
end
