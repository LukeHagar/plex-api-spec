# Media Queries
Media queries are a querystring-based filtering language used to select subsets of media. The language is rich, and can express complex expressions for media selection, as well as sorting and grouping.

### Fields
Queries reference fields, which can be of a few types:

* *integer*: numbers
* *boolean*: true/false
* *tag*: integers representing tag IDs.
* *string*: strings
* *date*: epoch seconds
* *language*: string in ISO639-2b format.

These fields are detailed in `Field` elements in the section description endpoint (e.g. `/library/sections/X?includeDetails=1`).

### Operators

Given that media queries are expressible using querystrings, the operator syntax might look a bit quirky, because a) they have to include the `=` character, and b) characters to the left of the equal sign usually have to be URI encoded.

Operators are defined per type:

* *integer*: `=` (equals), `!=` (not equals), `>>=` (greater than), `<<=` (less than), `<=` (less than or equals), `>=` (greater than or equals)
* *boolean*: `=0` (false) and `=1` (true)
 * *tag*: `=` (is) and `!=` (is not)
* *string*: `=` (contains), `!=` (does not contain), `==` (equals), `!==` (does not equal), `<=` (begins with), `>=` (ends with)
* *date*:  `=` (equals), `!=` (not equals), `>>=` (after), `<<=` (before)
* *language*:  `=` (equals), `!=` (not equals)

### Relative Values and Units

For some types, values can be specified as relative. For dates, epoch seconds can be specified as relative to “now” as follows: `+N` (in N seconds from now and `-N` (N seconds ago).

In addition, the following unit suffixes can be used on date values:

* *m*: minutes
* *h*: hours
* *d*: days
* *w*: weeks
* *mon*: months
* *y*: years

For example, `>>=-3y` means “within the last 3 years”.

### Field Scoping

Some media is organized hierarchically (e.g. shows), and in those cases, many fields are common to different elements in the hierarchy (e.g. show title vs episode title). The following rules are used to resolve field references.

* A `type` parameter must be included to specify the result type.
* Any non-qualified field is defaulted to refer to the result type.
* In order to refer to other levels of the hierarchy, use the scoping operator, e.g. `show.title` or `episode.year`. A query may be comprised of multiple fields from different levels of the hierarchy.
* the `sourceType` parameter may be used to change the default level to which fields refer. For example, `type=4&sourceType=2&title==24` means “all episodes where the show title is 24”.

### Sorting

The `sort` parameter is used to indicate an ordering on results. Typically, the sort value is a field (including optional scoping). The `:` character is used to indicate additional features of the sort, and the `,` character is used to include multiple fields to the sort.

For example, `sort=title,index` means “sort first by title ascending, then by index”.  Sort features are:

* *desc*: indicates a descending sort.
* *nullsLast*: indicates that null values are sorted last.

Sort features may be mixed and matched, e.g. `sort=title,index:desc`.

### Grouping

The `group` parameter is used to group results by a field, similar to the SQL feature `group by`. For example, when listing popular tracks, we use the query `type=10&sort=ratingCount:desc&group=title`, because we don’t want multiple tracks with the same name (e.g. same track on different albums) showing up.

### Limits

The `limit` parameter is used to limit the number of results returned. Because it’s implemented on top of the SQL `limit` operator, it currently only operates at the level of the type returned. In other words, `type=10&limit=100` will return at most 100 tracks, but you can’t select tracks from a limit of 10 _albums_.

### Boolean Operators

Given the nature of querystrings, it makes a lot of sense to interpret the `&` character as a boolean AND operator. For example `rating=10&index=5` means “rating is 10 AND index is 5”.

We leverage the `,` operator to signify the boolean OR operator. SO `rating=1,2,3` means “rating is 1 OR 2 OR 3. Given standard precedence rules, `rating=1,2,3&index=5` is parsed as `(rating = 1 or rating = 2 or rating = 3) and index = 5)`.

### Complex Expressions

There’s only so many expressions you can form using vanilla querystring-to-boolean mapping (essentially, “ANDs of ORs”). In order to fully represent complex boolean expressions, there are a few synthetic additions:

* *push=1* and *pop=1*:  These are the equivalent of opening and closing parenthesis.
* *or=1*: These is an explicit OR operator.

As an example: `push=1&index=1&or=1&rating=2&pop=1&duration=10` parses into `(index = 1 OR rating = 2) AND duration = 10`. This could not be expressed by the simplified syntax above.

Happy query building!
