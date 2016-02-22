class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user(@user)
      List.create!(title: "Want to Try", user_id: current_user.id, can_delete: false)
      List.create!(title: "Eaten", user_id: current_user.id, can_delete: false)
      redirect_to root_url
    else
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
