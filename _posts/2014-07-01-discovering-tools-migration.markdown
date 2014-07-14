---
layout:   post
title:    "Discovering Tools: Migration"
date:     2014-07-01 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt: Migration is a tool to help you to manage your database changes. Migration lets you develop application without worrying the database structure across every developers.
---

Hi everyone! Welcome to the next on Discovering Tools, a series to discuss tools that make us, developers, productive and happy. This time, we will talk about schema migrations.The fact that almost every kind of application application need to store their information, database has already been a crucial aspect in developing application. In order to maintain a healthy database structure, every developer needs to have the same exact version of the database structure. If not, then, happy debugging. So, let's tackle the problem.

## What is Migration? ##

In simple terms, migration is a version control system for database. It is like `git`/`mercurial`/`bazaar`/`subversion` for database. Traditional way to keep the database changes is to keep a separated SQL file that create all the database structure. The file needs to be updated for every structure change in the database. This method works, but you need to drop all the tables in order to update the structure. We could do better.

The second method is to keep all the database change in a separated SQL file. So, everytime a developer changes the database structure, they need to create a new SQL file that list all the database alteration statement. After that, the other developers will only need to import the SQL file to keep their database structure. This method is better than the previous method since you do not need to drop all the tables to keep your database healthy. But, if someone forget their current database structure and the migrations files already in huge amount, they need to drop all the tables. We could do better, again.

![Drop Table Meme][drop-table-meme]

From those two methods, there are three additional problems. It is how do I remember my current database version or structure, what if the development database is different with the production, and how to do rollback if we need it. Migration solve all this problems. Migration tools let you code(in your preference language) every of your database changes, save it to the file, generate the proper SQL statement to alter your database, and keep track of your current database version. It means, you do not need to write any SQL.You only need to code your database changes and run the migrate command. Then, you may take a cup of coffee to relax.

## How to use Migration? ##

Migration tools usually comes with an application framework. Migration is usually tied to a framework as part the the framework design since it was one of the most crucial aspect in developing apps. But, there are still a lot of standalone migration libraries. The first step to migrate your database it to code you database change. Usually, there are command to generate blank migration file to let you code the database structure. Here is the examples. This one is from PHP - Laravel.

{% highlight php %}
<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminTable extends Migration {

    public function up()
    {
        Schema::create('users', function($table)
        {
            $table->increments('id');
            $table->string('fullname')->default('Anonymous');
            $table->string('username', 31)->unique();
            $table->string('password', 63);
            $table->string('email')->unique();
            $table->boolean('active')->default(false);

            $table->dateTime('updated_at')->nullable();
            $table->dateTime('created_at')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}?>
{% endhighlight %}

And this one is from Ruby - Rails.

{% highlight ruby %}
class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users, do |t|
      t.string     :fullname, default: 'Anonymous'
      t.string     :username, limit: 31
      t.string     :password, limit: 63
      t.string     :email
      t.boolean    :active, default: false

      t.timestamps
    end

    add_index :memberships, :username, unique: true
    add_index :memberships, :email, unique: true
  end

  def down
    drop_table :memberships
  end
end
{% endhighlight %}

It is amazing, right? We do not need to write SQL. We only need to code it right here, right now. With object oriented style, the code is pretty intuitive and readable. Both version of the code generate the same database structure. The `up` function is executed when the `migrate` command is used. The `down` function is executed when the `rollback` command is used. Now, if we want to add or drop column from the database schema, we need to generate a blank migration file template and code it Oh yeah, I forgot to mention that this code works on multiple database like MySQL, PostgreSQL, SQLite, and many more. Here are the examples. This one is from PHP - Laravel.

{% highlight php %}
<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeAdminTable extends Migration {

    public function up()
    {
        Schema::table('users', function($table)
        {
            $table->string('address');
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {
            $table->dropcolumn('address');
        });
    }
}?>
{% endhighlight %}

This one is from Ruby - Rails

{% highlight ruby %}
class ChangeUsers < ActiveRecord::Migration
  def up
    change_table :users, do |t|
      t.string     :address
    end

  end

  def down
    remove_column :users, :address
  end
end
{% endhighlight %}

In this case, we want to add a simple column while migrating the database structure and remove the column when we rollback the database. Simple and clean. We need to keep the migration files into the code versioning system in order to share the migrations files to the other working developers. The other developer only need to run the `migrate` command and their database is updated and healthy. We are all happy developers. If you want to try the real migration tutorial, you can check at [Laravel][laravel-migration] and [Rails][rails-migration].

## Conclusion ##

In short, migration tools help us to manage our database structure for development and production. For us, This migration tools value is priceless. It help us solving a lot of database structure problem. Once you used migration tools, there is no going back. Thank you for your attention, see you on the next Discovering Tools. Keep productive and happy!

[laravel-migration]: http://laravel.com/docs/migrations
[rails-migration]: http://guides.rubyonrails.org/migrations.html
[drop-table-meme]: https://i.chzbgr.com/maxW500/8242029568/h1AE0CD37/
