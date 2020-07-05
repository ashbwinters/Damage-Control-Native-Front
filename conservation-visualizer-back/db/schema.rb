# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_05_021040) do

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "art_tampers", force: :cascade do |t|
    t.boolean "signifcant_tamper"
    t.boolean "used_program"
    t.integer "painting_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["painting_id"], name: "index_art_tampers_on_painting_id"
  end

  create_table "breaths", force: :cascade do |t|
    t.integer "painting_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["painting_id"], name: "index_breaths_on_painting_id"
  end

  create_table "bumps", force: :cascade do |t|
    t.integer "painting_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["painting_id"], name: "index_bumps_on_painting_id"
  end

  create_table "flashes", force: :cascade do |t|
    t.integer "painting_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["painting_id"], name: "index_flashes_on_painting_id"
  end

  create_table "paintings", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "accessionNumber"
  end

  create_table "tampers", force: :cascade do |t|
    t.integer "painting_id", null: false
    t.boolean "significant_tamper"
    t.boolean "used_program"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["painting_id"], name: "index_tampers_on_painting_id"
  end

  create_table "touches", force: :cascade do |t|
    t.integer "painting_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["painting_id"], name: "index_touches_on_painting_id"
  end

  add_foreign_key "art_tampers", "paintings"
  add_foreign_key "breaths", "paintings"
  add_foreign_key "bumps", "paintings"
  add_foreign_key "flashes", "paintings"
  add_foreign_key "tampers", "paintings"
  add_foreign_key "touches", "paintings"
end
