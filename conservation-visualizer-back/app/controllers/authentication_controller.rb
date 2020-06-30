class AuthenticationController < ApplicationController
    def login
        @admin = Admin.find_by(username: params[:username])

        if @admin

            if @admin.authenticate(params[:password])
                token = create_token(@admin)

                render json: {
                    token: token,
                    admin_id: @admin.id
                }
            else
                render json: {message: "Password is incorrect. Please try again."}, status: :unauthorized
            end
        else
            render json: {message: "Username is incorrect. Please try again."}, status: :unauthorized
        end
    end
end
