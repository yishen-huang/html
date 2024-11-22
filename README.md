# html
新建项目 A
	仅 commit 

PR closed + commit


同名分支
	第一个仅 commit 的情况下，创建第二个项目，进行 commit 时提示：REJECTED_NONFASTFORWARD
	还是上面的两个项目，第一个 PR 已经提交但是没有合并关闭，然后第二个直接进行 PR 提交，提示 422 Validation Failed [{Resource:PullRequest Field: Code:custom Message:A pull request already exists for yishen-huang:chore/init-clacky-env.}]



	同名分支
		上一个未关闭时，创建第二个分支
			commit
			pr
		上一个已关闭时，创建第二个分支
			commit 
			pr