---
layout:   post
title:    "Coding Guideline: PHP"
date:     2014-09-28 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt:  PHP coding guideline to make your code even more readable
---

Good day, fellow readers. Since Suitmedia is an project-based agency, every project could be handled by a lot of person. For example, if we get an old projects that has already developed by a lot of people, the code is very ugly. A lot of hard coded method and algorithm, no function abstraction, single character variable names, and many more. We do realize that in our teams, the coding style of every developer is quite different. So, in order to make the context switching time more effective and happy, we decided to make our own guideline for PHP code. Yay!

<script async class="speakerdeck-embed" data-id="158a79a0292301321a10562d5512248d" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## Spaces is Better than Tabs ##

Always use spaces than tabs. Tabs destroy the code structure when we want to see out code in our git client. Some git client translate a tab into 8 spaces. If you see a PHP file with tabs, Sublime Text already had "Convert to Spaces" command. Neat. Use 4 spaces per indent as it is the convention among PHP developers and the default space size of almost every editor.

## No ?> in the End of File ##

Well, it has no use, instead giving a chance to make bug for your code. Only do this with a file with all PHP code. Less code is better.

## One Statement Per Line ##

Easier to see changes with side-by-side diff. It make your code more readable. We do not want to see 10 method call in one line. XD. Do not do this.

{% highlight php %}
public function getRegister()
{ $user = new User(); return View::make('frontend.register')->with('user', $user);  // Hell
}
{% endhighlight %}

Do this.

{% highlight php %}
public function getRegister()
{
    $user = new User();
    return View::make('frontend.register')->with('user', $user);
}
{% endhighlight %}

## Multiple Line Argument Lists ##

If you somehow has a function with a lot of arguments, you may split the argument in different line like this.

{% highlight php %}
class ClassName
{
    public function aVeryLongMethodName(
        ClassTypeHint $arg1,
        &$arg2,
        array $arg3 = []
    ) {
        // method body
    }
}
{% endhighlight %}

## Position of Opening and Closing Braces ##

Enough spaces in the code makes it is easier to read. We do not want to read codes that has no spaces at all. It is just hard. So, please do this.

{% highlight php %}
function getRegister($type)
{  // Opening bracket on new line after class of function
    if ($type) {  // Opening bracket in the same line after control statement
        $user = new User::find(1);
    } else {
        $user = new User();
    }
    return View::make('frontend.register')->with('user', $user);;
}
{% endhighlight %}

The opening bracket after a class or a function must be after a new line. The opening bracket after control statement like `if` or `switch` in on the same line.

## Explicit Declaration of Visibility ##

Yes, we need to know whether a method or attribute is static, public, private, or protected. Never ever do this.

{% highlight php %}
function getRegister()  // No visibility declaration
{
    $user = new User();
    return View::make('frontend.register')->with('user', $user);;
}
{% endhighlight %}

Instead, do this.

{% highlight php %}
public function getRegister()  // It is a public method
{
    $user = new User();
    return View::make('frontend.register')->with('user', $user);;
}
{% endhighlight %}

## Camel Case for Method ##

We believe using camel case will make our code more readable. Since it is the international standard for method names in PHP, we want to stick to the ground rules. Do not do this.

{% highlight php %}
public function get_register()  // Underscore
{
    $user = new User();
    return View::make('frontend.register')->with('user', $user);;
}
{% endhighlight %}

Or this.

{% highlight php %}
public function getreg()  // Bad abbreviation
{
    $user = new User();
    return View::make('frontend.register')->with('user', $user);;
}
{% endhighlight %}

Instead of this.

{% highlight php %}
public function getRegister()  // Best
{
    $user = new User();
    return View::make('frontend.register')->with('user', $user);;
}
{% endhighlight %}

## Friendly Variable Names With Underscore ##

Simple, we do not want variable names like this.

{% highlight php %}
$i = 0;
$j = 'TEST';
$asd = 6.82;
{% endhighlight %}

But we want it like this way.

{% highlight php %}
$counter = 0;
$username = 'ICEFROG';
$app_version = 6.82;
{% endhighlight %}

Alright, it is done, for now. We will update this post if we feel the need to update the guideline. Until that time, stay awesome with your code. :)
