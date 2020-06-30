class AdminsController < ApplicationController
    before_action :authenticate, only: [:index, :show]

    def index
        @admins = Admin.all
        render json: @admins
    end

    def show
        @admin = Admin.find(params[:id])
        render json: @admin
    end

    def create
        @admin = Admin.new(admin_params)

        if @admin.save
            render json: {status: :created}
        else
            render json: { message: @admin.errors.messages }
        end
    end

    private

    def admin_params
        params.require(:admin).permit(:username, :password)
    end
end